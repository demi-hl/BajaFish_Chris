// BajaFish root service worker — KILL SWITCH.
//
// The standalone app (login screen) at "/" has been retired. The marketing
// site at /site/ is the only front door. Some browsers still have an older
// root service worker ("bajafish-v1"/"bajafish-v2") that precached the app
// shell and kept serving the login screen, ignoring the server redirect.
//
// This version owns no cache and serves nothing. On activation it deletes all
// caches, unregisters itself, and sends any open window to /site/. After this
// runs once there is no root service worker left.

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil((async function () {
    try {
      var keys = await caches.keys();
      await Promise.all(keys.map(function (k) { return caches.delete(k); }));
    } catch (err) {}
    try { await self.registration.unregister(); } catch (err) {}
    try {
      var clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach(function (c) {
        var path;
        try { path = new URL(c.url).pathname; } catch (e) { path = ''; }
        if (path === '/' || path === '/index.html') {
          c.navigate('/site/index.html');
        }
      });
    } catch (err) {}
  })());
});

// No fetch handler: every request goes straight to the network/server, which
// serves the redirect index.html -> /site/.
