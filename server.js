"use strict";

const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const root = path.join(__dirname, "public");
const port = Number(process.env.PORT || 8042);
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".webp": "image/webp"
};

function sendFile(request, response, filename, stats) {
  const contentType = mimeTypes[path.extname(filename).toLowerCase()] || "application/octet-stream";
  const range = request.headers.range;

  response.setHeader("Accept-Ranges", "bytes");
  response.setHeader("Cache-Control", "no-cache");
  response.setHeader("Content-Type", contentType);

  if (range) {
    const match = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (!match) {
      response.writeHead(416, { "Content-Range": `bytes */${stats.size}` });
      response.end();
      return;
    }

    const start = match[1] ? Number(match[1]) : 0;
    const end = match[2] ? Math.min(Number(match[2]), stats.size - 1) : stats.size - 1;
    if (start > end || start >= stats.size) {
      response.writeHead(416, { "Content-Range": `bytes */${stats.size}` });
      response.end();
      return;
    }

    response.writeHead(206, {
      "Content-Length": end - start + 1,
      "Content-Range": `bytes ${start}-${end}/${stats.size}`
    });
    if (request.method === "HEAD") response.end();
    else fs.createReadStream(filename, { start, end }).pipe(response);
    return;
  }

  response.writeHead(200, { "Content-Length": stats.size });
  if (request.method === "HEAD") response.end();
  else fs.createReadStream(filename).pipe(response);
}

const server = http.createServer((request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch {
    response.writeHead(400);
    response.end("Bad request");
    return;
  }

  const requestedPath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const filename = path.resolve(root, requestedPath);
  if (!filename.startsWith(`${root}${path.sep}`) && filename !== path.join(root, "index.html")) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.stat(filename, (error, stats) => {
    if (error || !stats.isFile()) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
    sendFile(request, response, filename, stats);
  });
});

server.listen(port, () => {
  console.log(`Kookin preview: http://localhost:${port}`);
});
