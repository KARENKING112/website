import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  assetsInclude: [/\.md$/],
  server: {
    host: "0.0.0.0",
  },
});
