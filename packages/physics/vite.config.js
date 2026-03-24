import { defineConfig } from "vite";
const path = require("path");
export default defineConfig({
  resolve: {
    alias: {
      "@rings-webgpu/core": path.resolve(__dirname, "../../src"),
      "@rings-webgpu/ammo": path.resolve(__dirname, "../ammo/ammo.js"),
    },
  },
  build: {
    target: "esnext",
    lib: {
      entry: path.resolve("index.ts"),
      name: "Physics",
      fileName: (format) => `physics.${format}.js`,
    },
    rollupOptions: {
      external: ["@rings-webgpu/core", "@rings-webgpu/ammo"],
      output: {
        globals: {
          "@rings-webgpu/core": "Rings",
          "@rings-webgpu/ammo": "Ammo",
        },
      },
    },
  },
});
