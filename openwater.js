/* Open Water — presentation motion (count-up + hero parallax). Additive, no app logic. */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Stat count-up (runs once, after app.js has filled the numbers) ----
  function animateCount(el, target) {
    var dur = 1100, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toString();
      if (p < 1) requestAnimationFrame(step); else el.textContent = target.toString();
    }
    requestAnimationFrame(step);
  }
  function runCountUp() {
    var ids = ['stat-reports', 'stat-species', 'stat-zones'], vals = {}, ready = true;
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el || el.dataset.counted) { if (!el) ready = false; return; }
      var n = parseInt((el.textContent || '').replace(/[^0-9]/g, ''), 10);
      if (isNaN(n)) { ready = false; return; }
      vals[id] = n;
    });
    if (!ready || !Object.keys(vals).length) return false;
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el || el.dataset.counted || vals[id] === undefined) return;
      el.dataset.counted = '1';
      if (reduce) { el.textContent = vals[id]; } else { animateCount(el, vals[id]); }
    });
    return true;
  }
  var tries = 0, t = setInterval(function () { tries++; if (runCountUp() || tries > 60) clearInterval(t); }, 250);

  // ---- Hero parallax — the SPA scroll root is the active .screen, not window ----
  if (!reduce) {
    var home = document.getElementById('screen-home');
    var media = home && home.querySelector('.ow-hero-media');
    if (home && media) {
      var ticking = false;
      home.addEventListener('scroll', function () {
        if (ticking) return; ticking = true;
        requestAnimationFrame(function () {
          var y = Math.min(home.scrollTop * 0.34, 220);
          media.style.transform = 'translate3d(0,' + y + 'px,0) scale(1.06)';
          ticking = false;
        });
      }, { passive: true });
    }
  }
})();
