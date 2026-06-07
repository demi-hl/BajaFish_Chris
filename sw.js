// BajaFish Service Worker
// Caches core app shell for offline/installed use

const CACHE = 'bajafish-v2';
const CORE = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/data.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap',
];

// Install: cache core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch strategy:
//   App shell (navigations + same-origin HTML/CSS/JS) → NETWORK-FIRST so code
//     edits always show when online; fall back to cache only when offline.
//   Everything else (images, fonts, CDN) → cache-first for speed/offline.
self.addEventListener('fetch', e => {
  // Skip non-GET and cross-origin requests (except known CDNs)
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);
  const isShell =
    url.origin === self.location.origin &&
    (e.request.mode === 'navigate' ||
     url.pathname === '/' ||
     /\.(html|css|js)$/.test(url.pathname));

  if (isShell) {
    // Network-first: fetch fresh, update cache, fall back to cache offline.
    e.respondWith(
      fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  // Cache-first for the rest.
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res.ok && (
          url.origin === self.location.origin ||
          e.request.url.includes('unpkg.com') ||
          e.request.url.includes('fonts.googleapis.com') ||
          e.request.url.includes('fonts.gstatic.com') ||
          e.request.url.includes('inaturalist-open-data')
        )) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
    })
  );
});
