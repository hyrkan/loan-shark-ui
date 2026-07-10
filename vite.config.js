import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    // Prevent Vite from trying to resolve missing .map files for vendored CSS
    devSourcemap: false,
  },
  server: {
    // Suppress sourcemap warnings for vendored minified assets that don't ship with .map files
    sourcemapIgnoreList: (sourcePath) => sourcePath.includes('/src/assets/'),
  },
})
