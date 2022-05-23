import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  assetsInclude: [/\.md$/],
  build: {
    target: "esnext",
    minify: "esbuild",
    // assetsInlineLimit: 0,
    polyfillModulePreload: false,
    reportCompressedSize: false,
    outDir: "docs",
  },
});
