import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { extname, resolve } from 'path';

const PORT = 3000;
const ROOT = new URL('.', import.meta.url).pathname;
const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
};

// Build check — if dist exists, serve it; otherwise note dev server needed
const serveDir = existsSync(resolve(ROOT, 'dist')) ? 'dist' : null;

if (!serveDir) {
  console.log('⚠️  No dist/ found. Run `npm run build` first, or use `npm run dev` for dev mode.');
}

createServer((req, res) => {
  let filePath = resolve(ROOT, serveDir || '', req.url === '/' ? 'index.html' : req.url.slice(1));
  const ext = extname(filePath);

  if (!existsSync(filePath)) {
    // SPA fallback
    filePath = resolve(ROOT, serveDir || '', 'index.html');
  }

  try {
    const data = readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
}).listen(PORT, () => {
  console.log(`🚗 SylversAutoHQ server running at http://localhost:${PORT}`);
});
