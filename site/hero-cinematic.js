/* ============================================================
   BajaFish hero — "Descent" + interactive zoomable map
   The hero image is a real NASA MODIS satellite shot of the Baja
   peninsula. On load it dives from orbit toward the southern Cape
   (intro), then HANDS OFF to the user as an explorable map:
     - wheel / trackpad  -> zoom toward the cursor
     - pinch (2 fingers) -> zoom; two-finger drag -> pan
     - click + drag      -> pan (mouse/pen)
     - double-click      -> step zoom in
     - on-screen +/-/fit controls
   Bounded so the image always covers the hero. Any interaction
   cancels the intro immediately.

   Self-hosted asset + self script (CSP-safe: no CDN, no WebGL,
   no inline JS). transform/opacity only, GPU-composited. On
   reduced-motion it skips the auto dive but stays zoomable. On
   touch, one finger still scrolls the page (touch-action pan).
   ============================================================ */
(function () {
  'use strict';

  var FOCAL_X = 0.72, FOCAL_Y = 0.82;   // Cabo coast, normalized
  var MIN = 1, MAX = 6;
  var DESCENT_DUR = 6.2;                 // seconds, orbit -> coast
  var DESCENT_Z = 2.5;                   // scale the intro settles on

  function init() {
    var media = document.querySelector('.hero__media');
    var img = media && media.querySelector('.hero__img');
    if (!img) return;
    var hero = media.closest('.hero') || media;

    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

    // ---- transform model: origin 0,0 + explicit translate/scale ----
    img.style.height = '100%';
    img.style.transformOrigin = '0 0';
    img.style.willChange = 'transform';
    img.draggable = false;
    img.style.filter = 'saturate(1.05) contrast(1.02)';
    if (fine) img.style.cursor = 'grab';
    hero.style.touchAction = 'pan-x pan-y';   // 1-finger scrolls page; we own pinch

    var scale = 1, tx = 0, ty = 0;
    function bw() { return media.clientWidth; }
    function bh() { return media.clientHeight; }
    function clamp() {
      var minX = -(scale - 1) * bw(), minY = -(scale - 1) * bh();
      if (tx > 0) tx = 0; if (tx < minX) tx = minX;
      if (ty > 0) ty = 0; if (ty < minY) ty = minY;
    }
    function apply() {
      clamp();
      img.style.transform = 'translate(' + tx.toFixed(2) + 'px,' + ty.toFixed(2) + 'px) scale(' + scale.toFixed(4) + ')';
    }
    function zoomTo(ns, cx, cy) {
      ns = Math.max(MIN, Math.min(MAX, ns));
      if (ns === scale) return false;
      var k = ns / scale;
      tx = cx - (cx - tx) * k;
      ty = cy - (cy - ty) * k;
      scale = ns;
      apply();
      return true;
    }
    apply();

    // ---- intro descent (zoom into Cabo) ----
    var descent = { active: false, raf: 0, t0: 0 };
    var atmo, haze;
    function buildAtmo() {
      atmo = document.createElement('div');
      atmo.setAttribute('aria-hidden', 'true');
      atmo.style.cssText =
        'position:absolute;inset:0;pointer-events:none;z-index:1;mix-blend-mode:screen;opacity:1;' +
        'background:radial-gradient(120% 90% at 50% -12%, rgba(120,180,235,.55), rgba(80,140,200,.12) 38%, transparent 60%),' +
        'radial-gradient(140% 120% at 50% 50%, transparent 55%, rgba(40,90,150,.32) 88%, rgba(12,30,55,.55) 100%)';
      haze = document.createElement('div');
      haze.setAttribute('aria-hidden', 'true');
      haze.style.cssText =
        'position:absolute;inset:0;pointer-events:none;z-index:1;mix-blend-mode:multiply;opacity:1;' +
        'background:linear-gradient(180deg, rgba(150,185,220,.30), rgba(120,160,205,.10) 45%, transparent 75%)';
      media.appendChild(atmo); media.appendChild(haze);
    }
    function clearAtmo(now) {
      if (atmo) { atmo.style.transition = 'opacity .8s ease'; atmo.style.opacity = '0'; setTimeout(function () { atmo && atmo.remove(); }, 900); }
      if (haze) { haze.style.transition = 'opacity .8s ease'; haze.style.opacity = '0'; setTimeout(function () { haze && haze.remove(); }, 900); }
    }
    function easeInOutSine(p) { return -(Math.cos(Math.PI * p) - 1) / 2; }
    function descentFrame(now) {
      descent.raf = 0;
      if (!descent.active) return;
      if (document.hidden) { descent.raf = requestAnimationFrame(descentFrame); return; }
      if (!descent.t0) descent.t0 = now;
      var p = Math.min((now - descent.t0) / (DESCENT_DUR * 1000), 1);
      var target = 1 + (DESCENT_Z - 1) * easeInOutSine(p);
      zoomTo(target, FOCAL_X * bw(), FOCAL_Y * bh());
      var clr = Math.min(p / 0.65, 1), e = 1 - Math.pow(1 - clr, 3);
      if (atmo) atmo.style.opacity = (1 - e * 0.9).toFixed(3);
      if (haze) haze.style.opacity = (1 - e).toFixed(3);
      img.style.filter = 'saturate(' + (1.05 + 0.08 * clr).toFixed(2) + ') contrast(1.02) brightness(' + (0.9 + 0.16 * clr).toFixed(2) + ')';
      if (p >= 1) { descent.active = false; clearAtmo(); return; }
      descent.raf = requestAnimationFrame(descentFrame);
    }
    function startDescent() {
      buildAtmo();
      descent.active = true; descent.t0 = 0;
      descent.raf = requestAnimationFrame(descentFrame);
    }
    function cancelDescent() {
      if (!descent.active) return;
      descent.active = false;
      if (descent.raf) cancelAnimationFrame(descent.raf);
      clearAtmo();
      img.style.filter = 'saturate(1.05) contrast(1.02) brightness(1)';
    }

    // ---- pointer interaction (pan + pinch) ----
    var pointers = new Map(), last = null, pinchDist = 0;
    function pts() { return Array.from(pointers.values()); }
    function pdist() { var a = pts(); return Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y); }
    function pmid() { var a = pts(); return { x: (a[0].x + a[1].x) / 2, y: (a[0].y + a[1].y) / 2 }; }
    function skip(t) { return t.closest && t.closest('a,button,input,select,textarea,label,.hero__zoom'); }

    hero.addEventListener('pointerdown', function (e) {
      if (skip(e.target)) return;
      cancelDescent();
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      try { hero.setPointerCapture(e.pointerId); } catch (x) {}
      if (pointers.size === 2) { pinchDist = pdist(); last = null; }
      else if (pointers.size === 1 && e.pointerType !== 'touch') {
        last = { x: e.clientX, y: e.clientY };       // mouse/pen pans; touch keeps page-scroll
        if (fine) img.style.cursor = 'grabbing';
      }
      hint && hideHint();
    });
    hero.addEventListener('pointermove', function (e) {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 2) {
        var d = pdist(), r = media.getBoundingClientRect(), m = pmid();
        if (pinchDist > 0) zoomTo(scale * (d / pinchDist), m.x - r.left, m.y - r.top);
        // two-finger drag also pans
        if (last2) { tx += m.x - last2.x; ty += m.y - last2.y; apply(); }
        last2 = { x: m.x, y: m.y };
        pinchDist = d;
      } else if (pointers.size === 1 && last) {
        tx += e.clientX - last.x; ty += e.clientY - last.y;
        last = { x: e.clientX, y: e.clientY };
        apply();
      }
    });
    var last2 = null;
    function endPtr(e) {
      if (pointers.has(e.pointerId)) pointers.delete(e.pointerId);
      if (pointers.size < 2) { pinchDist = 0; last2 = null; }
      if (pointers.size === 0) { last = null; if (fine) img.style.cursor = 'grab'; }
      else if (pointers.size === 1) { var p = pts()[0]; last = { x: p.x, y: p.y }; }
    }
    hero.addEventListener('pointerup', endPtr);
    hero.addEventListener('pointercancel', endPtr);

    // ---- wheel zoom toward cursor (lets page scroll at min zoom) ----
    hero.addEventListener('wheel', function (e) {
      if (skip(e.target)) return;
      var r = media.getBoundingClientRect();
      var ns = Math.max(MIN, Math.min(MAX, scale * Math.exp(-e.deltaY * 0.0016)));
      if (ns !== scale) {
        e.preventDefault();
        cancelDescent();
        zoomTo(ns, e.clientX - r.left, e.clientY - r.top);
        hideHint();
      }
    }, { passive: false });

    // ---- double-click step zoom ----
    hero.addEventListener('dblclick', function (e) {
      if (skip(e.target)) return;
      cancelDescent();
      var r = media.getBoundingClientRect();
      var ns = scale < MAX - 0.01 ? Math.min(MAX, scale * 1.8) : MIN;
      if (ns === MIN) { tx = 0; ty = 0; scale = 1; apply(); }
      else zoomTo(ns, e.clientX - r.left, e.clientY - r.top);
    });

    // ---- on-screen controls ----
    var ctrl = document.createElement('div');
    ctrl.className = 'hero__zoom';
    ctrl.setAttribute('aria-label', 'Zoom map');
    ctrl.style.cssText =
      'position:absolute;right:18px;top:50%;transform:translateY(-50%);z-index:6;' +
      'display:flex;flex-direction:column;gap:8px;pointer-events:auto';
    function mkBtn(label, title) {
      var b = document.createElement('button');
      b.type = 'button'; b.textContent = label; b.title = title;
      b.setAttribute('aria-label', title);
      b.style.cssText =
        'width:40px;height:40px;border-radius:10px;cursor:pointer;font:600 18px/1 system-ui,sans-serif;' +
        'color:#F3ECDD;background:rgba(8,18,26,.62);border:1px solid rgba(243,236,221,.16);' +
        'backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);transition:background .2s,border-color .2s';
      b.addEventListener('mouseenter', function () { b.style.background = 'rgba(255,199,44,.16)'; b.style.borderColor = 'rgba(255,199,44,.5)'; });
      b.addEventListener('mouseleave', function () { b.style.background = 'rgba(8,18,26,.62)'; b.style.borderColor = 'rgba(243,236,221,.16)'; });
      return b;
    }
    function centerZoom(ns) { zoomTo(ns, bw() / 2, bh() / 2); }
    var bIn = mkBtn('+', 'Zoom in');
    var bOut = mkBtn('\u2212', 'Zoom out');
    var bFit = mkBtn('\u2922', 'Reset view');
    bIn.addEventListener('click', function () { cancelDescent(); centerZoom(Math.min(MAX, scale * 1.5)); });
    bOut.addEventListener('click', function () { cancelDescent(); centerZoom(Math.max(MIN, scale / 1.5)); });
    bFit.addEventListener('click', function () { cancelDescent(); animateReset(); });
    ctrl.appendChild(bIn); ctrl.appendChild(bOut); ctrl.appendChild(bFit);
    hero.appendChild(ctrl);

    function animateReset() {
      var s0 = scale, x0 = tx, y0 = ty, t0 = 0;
      (function step(now) {
        if (!t0) t0 = now;
        var p = Math.min((now - t0) / 600, 1), e = 1 - Math.pow(1 - p, 3);
        scale = s0 + (1 - s0) * e; tx = x0 + (0 - x0) * e; ty = y0 + (0 - y0) * e;
        apply();
        if (p < 1) requestAnimationFrame(step);
      })(0);
    }

    // ---- hint ----
    var hint = document.createElement('div');
    hint.textContent = fine ? 'Scroll to zoom \u00b7 drag to explore' : 'Pinch to zoom \u00b7 drag to explore';
    hint.setAttribute('aria-hidden', 'true');
    hint.style.cssText =
      'position:absolute;right:70px;top:50%;transform:translateY(-50%);z-index:6;pointer-events:none;' +
      'font:500 12px/1.3 system-ui,sans-serif;letter-spacing:.04em;color:rgba(243,236,221,.78);' +
      'background:rgba(8,18,26,.5);padding:7px 11px;border-radius:8px;white-space:nowrap;' +
      'backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);transition:opacity .5s ease';
    hero.appendChild(hint);
    var hintHidden = false;
    function hideHint() { if (hintHidden || !hint) return; hintHidden = true; hint.style.opacity = '0'; setTimeout(function () { hint && hint.remove(); }, 600); }
    setTimeout(hideHint, 6000);

    window.addEventListener('resize', function () { apply(); }, { passive: true });

    // ---- boot: dive in, then it's yours ----
    function begin() { if (!reduce && window.innerWidth >= 768) startDescent(); }
    if (img.complete && img.naturalWidth) { if (img.decode) img.decode().then(begin).catch(begin); else begin(); }
    else img.addEventListener('load', function () { if (img.decode) img.decode().then(begin).catch(begin); else begin(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
