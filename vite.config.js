// vite.config.js
import { defineConfig } from "vite";
import { readFile, writeFile, readdir, lstat } from "fs/promises";
import { resolve, parse } from "path";
export default defineConfig((option) => ({
  server: {
    host: "0.0.0.0",
    port: 8000,
    hmr: false, // open this line if no auto hot-reload required
  },
  publicDir: option.command === "build" ? false : ["public", "docs"],
  resolve: {
    alias: {
      "@rings/core": resolve(__dirname, "./src/index.ts"),
      "@rings": resolve(__dirname, "./packages"),
      "@docs": resolve(__dirname, "./docs"),
    },
    mainFields: ["module:dev", "module"],
  },
  plugins:
    option.command === "build"
      ? undefined
      : [
          {
            name: "redirectToDocs",
            configureServer(server) {
              server.middlewares.use((req, res, next) => {
                if (req.url === '/') {
                  res.writeHead(302, { 'Location': '/docs/' });
                  res.end();
                } else if (req.url === '/test') {
                  res.writeHead(302, { 'Location': '/test-dev.html' });
                  res.end();
                } else if (req.url === '/examples/gsplat') {
                  res.writeHead(302, { 'Location': '/examples/gsplat/index.html' });
                  res.end();

                } else {
                  next();
                }
              });
            },
          },
          {
            name: "autoIndex",
            configureServer(server) {
              const tsFile = /\/src\/.*.ts$/;
              async function dir(folder, ts = []) {
                let files = await readdir(folder);
                for (let f of files) {
                  let path = resolve(folder, f).replace(/\\/g, "/"); // fix windows path
                  let ls = await lstat(path);
                  if (ls.isDirectory()) {
                    await dir(path, ts);
                  } else if (tsFile.test(path)) {
                    let name = parse(path).name;
                    if (
                      name !== "index" &&
                      !name.startsWith("_") &&
                      !name.endsWith("-back")
                    )
                      ts.push(path);
                  }
                }
                return ts;
              }
              async function autoIndex(file) {
                if (file && !tsFile.test(file.replace(/\\/g, "/")))
                  // fix windows path
                  return;
                let ts = await dir("./src");
                ts.sort(); // make sure same sort on windows and unix
                let improts = "",
                  _dir = __dirname.replace(/\\/g, "/") + "/src"; // fix windows path
                for (let path of ts) {
                  improts += `export * from "${path
                    .replace(_dir, ".")
                    .slice(0, -3)}"\r\n`;
                }
                let content = await readFile(
                  resolve(__dirname, "./src/index.ts"),
                  "utf-8"
                );
                if (improts !== content) {
                  console.log("[autoIndex] index.ts");
                  writeFile(resolve(__dirname, "./src/index.ts"), improts);
                }
              }
              server.httpServer.on("listening", autoIndex);
              server.watcher.on("change", autoIndex);
              server.watcher.on("unlink", autoIndex);
            },
          },
        ],
  build: {
    target: "esnext",
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "rings",
      fileName: (format) => `rings.${format}.max.js`,
    },
    minify: false,
  },
}));
