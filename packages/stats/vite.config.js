import { defineConfig } from "vite";
const path = require("path");
export default defineConfig({
  resolve: {
    alias: {
      "@rings/core": path.resolve(__dirname, "../../src"),
      "@rings": path.resolve(__dirname, "../"),
    },
  },
  build: {
    target: "esnext",
    lib: {
      entry: path.resolve("index.ts"),
      name: "Stats",
      fileName: (format) => `stats.${format}.js`,
    },
    rollupOptions: {
      external: ["@rings/core"],
      output: {
        globals: {
          "@rings/core": "Rings",
        },
      },
    },
  },
});
