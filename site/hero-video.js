/* BajaFish hero ocean video. Plays a muted, looping ocean clip behind the hero
   on capable devices and fades it in over the static hero photo. Falls back to
   the photo on mobile, slow connections, save-data, or reduced motion. Vanilla. */
(function () {
  'use strict';
  function start() {
    var v = document.querySelector('.hero__video');
    if (!v) return;
    var media = v.closest('.hero__media');
    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var conn = navigator.connection || {};
    var slow = conn.saveData === true || /(^|-)2g/.test(conn.effectiveType || '');
    if (reduce || slow || window.innerWidth < 768) return; // keep the static photo
    var srcs = v.querySelectorAll('source[data-src]');
    for (var i = 0; i < srcs.length; i++) srcs[i].src = srcs[i].getAttribute('data-src');
    v.preload = 'auto';
    v.load();
    v.addEventListener('playing', function () { if (media) media.classList.add('video-on'); }, { once: true });
    var p = v.play();
    if (p && typeof p.catch === 'function') p.catch(function () {});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
