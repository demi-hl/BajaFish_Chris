/* BajaFish service worker (anglers PWA). App-shell precache + runtime cache.
   Scope: /site/. Navigations are network-first with an offline fallback to the
   cached shell; same-origin assets are cache-first and populated as fetched.
   Cross-origin requests (fonts, Leaflet) are left to the network. */
var CACHE = 'bajafish-v2';
var SHELL = [
  '/site/index.html',
  '/site/site.css?v=14',
  '/site/site.js?v=19',
  '/site/hero-video.js?v=2',
  '/site/catch-data.js?v=1',
  '/site/departures.js?v=1',
  '/data.js?v=20260529-4',
  '/site/img/icon-192.png',
  '/site/img/icon-512.png',
  '/site/img/hero-ocean-poster.jpg?v=1'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return Promise.allSettled(SHELL.map(function (u) { return c.add(u); })); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) { return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // fonts / Leaflet / CDNs: straight to network

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(function (r) {
        var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put(req, cp); });
        return r;
      }).catch(function () {
        return caches.match(req).then(function (m) { return m || caches.match('/site/index.html'); });
      })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(function (m) {
      return m || fetch(req).then(function (r) {
        if (r && r.ok && r.type === 'basic') { var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put(req, cp); }); }
        return r;
      });
    })
  );
});
