/* BajaFish, hero water surface. Self-contained canvas overlay that reads as WATER:
   thin, wide, slowly waving horizontal caustic light streaks plus a faint drifting
   surface sheen. Very low opacity, screen blend, masked to the lower water band of
   the hero. No round bokeh glints. Reduced-motion safe (one static frame). Vanilla. */
(function () {
  'use strict';

  function start() {
    var hero = document.querySelector('.hero');
    if (!hero || hero.querySelector('.hero__water')) return;
    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    var c = document.createElement('canvas');
    c.className = 'hero__water';
    c.setAttribute('aria-hidden', 'true');
    // mask so the effect only lives on the lower water band of the hero
    var mask = 'linear-gradient(180deg,transparent 0%,transparent 46%,' +
      'rgba(0,0,0,.4) 62%,rgba(0,0,0,.85) 80%,#000 100%)';
    c.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;z-index:-1;' +
      'pointer-events:none;mix-blend-mode:screen;opacity:.5;' +
      '-webkit-mask-image:' + mask + ';mask-image:' + mask + ';';
    var inner = hero.querySelector('.hero__inner');
    hero.insertBefore(c, inner || null);

    var ctx = c.getContext('2d');
    var W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);

    function size() {
      W = hero.clientWidth; H = hero.clientHeight;
      c.width = Math.max(1, Math.round(W * dpr));
      c.height = Math.max(1, Math.round(H * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    window.addEventListener('resize', size, { passive: true });

    // Each streak is a long, thin horizontal light ribbon riding in the water band
    // (y from ~0.5 to ~1.0 of the hero). It waves gently and drifts sideways.
    var streaks = [];
    function build() {
      streaks.length = 0;
      var N = Math.max(7, Math.min(13, Math.round(W / 150)));
      for (var i = 0; i < N; i++) {
        streaks.push({
          y: 0.52 + Math.random() * 0.46,          // vertical home in the water band
          len: 0.34 + Math.random() * 0.5,          // fraction of width
          thick: 1.1 + Math.random() * 2.6,         // line thickness (px)
          amp: 3 + Math.random() * 12,              // vertical wave amplitude (px)
          wav: 1.1 + Math.random() * 1.9,           // horizontal wavelength factor
          drift: (Math.random() < 0.5 ? -1 : 1) * (0.006 + Math.random() * 0.018),
          phase: Math.random() * 6.2832,
          sp: 0.18 + Math.random() * 0.42,          // wave speed
          x: Math.random(),                         // left anchor (fraction)
          a: 0.06 + Math.random() * 0.16            // peak alpha
        });
      }
    }
    build();
    window.addEventListener('resize', build, { passive: true });

    // a slow, wide sheen band that breathes across the surface (faint sun on water)
    var sheen = { x: 0.32, phase: Math.random() * 6.2832 };

    function drawSheen(t) {
      var cx = (sheen.x + 0.16 * Math.sin(t * 0.00006 + sheen.phase)) * W;
      var cy = H * 0.82;
      var rad = W * 0.62;
      var g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
      var breathe = 0.5 + 0.5 * Math.sin(t * 0.00018 + sheen.phase);
      var a = 0.05 + 0.045 * breathe;
      g.addColorStop(0, 'rgba(150,210,220,' + a + ')');
      g.addColorStop(0.5, 'rgba(120,190,205,' + (a * 0.4) + ')');
      g.addColorStop(1, 'rgba(120,190,205,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, H * 0.4, W, H * 0.6);
    }

    function drawStreak(d, t) {
      var x0 = d.x * W;
      var pxLen = d.len * W;
      var x1 = x0 + pxLen;
      var baseY = d.y * H;
      // wavelength in px, at least a couple of crests across the streak
      var k = (Math.PI * 2 * d.wav) / Math.max(120, pxLen);
      var step = Math.max(6, pxLen / 64);

      // soft gaussian-ish alpha taper along the streak (bright middle, faint ends)
      // we render the streak as a thin gradient-stroked polyline.
      var grad = ctx.createLinearGradient(x0, 0, x1, 0);
      grad.addColorStop(0, 'rgba(214,240,238,0)');
      grad.addColorStop(0.5, 'rgba(232,248,242,' + d.a + ')');
      grad.addColorStop(1, 'rgba(214,240,238,0)');

      ctx.beginPath();
      var first = true;
      for (var x = x0; x <= x1; x += step) {
        var local = x - x0;
        var y = baseY +
          Math.sin(local * k + t * 0.001 * d.sp + d.phase) * d.amp +
          Math.sin(local * k * 0.37 + t * 0.0007 * d.sp) * d.amp * 0.35;
        if (first) { ctx.moveTo(x, y); first = false; }
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = grad;
      ctx.lineWidth = d.thick;
      ctx.lineCap = 'round';
      // faint blur-glow via shadow keeps streaks reading as light on water, not lines
      ctx.shadowColor = 'rgba(200,235,235,' + (d.a * 0.8) + ')';
      ctx.shadowBlur = d.thick * 3;
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    function draw(t) {
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'lighter';

      drawSheen(t);

      for (var i = 0; i < streaks.length; i++) {
        var d = streaks[i];
        d.x += d.drift * 0.016;            // gentle sideways drift
        if (d.x > 1.05) d.x = -d.len - 0.05;
        if (d.x + d.len < -0.05) d.x = 1.05;
        drawStreak(d, t);
      }

      ctx.globalCompositeOperation = 'source-over';
    }

    if (reduce) { draw(2200); return; }

    var running = true, last = 0;
    document.addEventListener('visibilitychange', function () {
      running = !document.hidden;
      if (running) requestAnimationFrame(loop);
    });
    function loop(t) {
      if (!running) return;
      // soft throttle to ~40fps; the motion is slow so this is plenty smooth
      if (t - last >= 24) { draw(t); last = t; }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
