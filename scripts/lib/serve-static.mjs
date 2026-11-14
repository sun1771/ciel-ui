import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'

const TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
}

/** Serves a static build (e.g. storybook-static) on a free port. */
export async function serveStatic(dir) {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://x')
    const file = path.join(dir, decodeURIComponent(url.pathname))
    if (!file.startsWith(dir) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      res.writeHead(404).end()
      return
    }
    res.writeHead(200, { 'content-type': TYPES[path.extname(file)] ?? 'application/octet-stream' })
    fs.createReadStream(file).pipe(res)
  })
  await new Promise((r) => server.listen(0, r))
  return { url: `http://127.0.0.1:${server.address().port}`, close: () => server.close() }
}
