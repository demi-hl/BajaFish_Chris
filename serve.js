const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.argv[2]) || Number(process.env.PORT) || 8081;
const DIR = __dirname;

// The marketing site at /site/ is the front door. Both / and /index.html
// redirect here so the standalone app login screen is never served. The app
// files are preserved on disk (app.js etc.) but not exposed at the root path.
const HOME = '/site/index.html';

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  let urlPath;
  try { urlPath = decodeURIComponent(req.url.split('?')[0]); }
  catch (e) { res.writeHead(400); res.end('Bad request'); return; }
  // Front door -> new marketing site, never the app login screen.
  if (urlPath === '/' || urlPath === '/index.html') {
    res.writeHead(302, { Location: HOME, 'Cache-Control': 'no-store' }); res.end(); return;
  }
  const filePath = path.resolve(DIR, '.' + urlPath);
  // keep reads inside the project directory (block path traversal)
  if (filePath !== DIR && !filePath.startsWith(DIR + path.sep)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }
  const ext = path.extname(filePath);
  const contentType = MIME[ext] || 'application/octet-stream';

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const total = stat.size;
    const headers = { 'Content-Type': contentType, 'Cache-Control': 'no-store', 'Accept-Ranges': 'bytes' };
    const range = req.headers.range;
    const m = range ? range.match(/bytes=(\d*)-(\d*)/) : null;
    if (m) {
      // partial content (lets Safari and others stream the hero video)
      const start = m[1] ? parseInt(m[1], 10) : 0;
      const end = m[2] ? parseInt(m[2], 10) : total - 1;
      if (isNaN(start) || isNaN(end) || start > end || end >= total) {
        res.writeHead(416, { 'Content-Range': 'bytes */' + total });
        res.end();
        return;
      }
      headers['Content-Range'] = 'bytes ' + start + '-' + end + '/' + total;
      headers['Content-Length'] = end - start + 1;
      res.writeHead(206, headers);
      fs.createReadStream(filePath, { start: start, end: end }).pipe(res);
    } else {
      headers['Content-Length'] = total;
      res.writeHead(200, headers);
      fs.createReadStream(filePath).pipe(res);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
