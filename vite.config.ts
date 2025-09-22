import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // ✅ Vuetify styles & components auto-import
  ],
  resolve: {
    alias: {
      "@": "/src", // ✅ so you can use @/components/... instead of relative paths
    },
  },
});
