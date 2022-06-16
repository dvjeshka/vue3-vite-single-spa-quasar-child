import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

import { resolve } from 'path';

const envPrefix = 'VUE_APP_';

export default defineConfig(({ mode}) => {
const env = loadEnv(mode, '', envPrefix);
const isProd = mode === 'production'
return {
  envPrefix,
  plugins: [
    vue({ template: { transformAssetUrls }}),
    quasar({
      autoImportComponentCase: 'pascal',
    }),
  ],
  // Указываем фактический адрес этого микрофронта в проде, чтобы рут приложение имело правильные ссылки на чанки этого микрофронта
  base: isProd ? env.VUE_APP_BASE_URL : '/' ,
  build: {
    minify: false,
    //sourcemap: true,
    target: 'esnext',
    rollupOptions: {
      preserveEntrySignatures: true, // Оставляет exports для single spa
      input: {
        index:'./index.html',
        app: "./src/main.ts"
      },
      output: { entryFileNames: "js/[name].js" },
      external: [
        'vue',
        //'vue-router',
        'singleSpaVue',
        'quasar',
        'quasar/lang/ru',
        '@quasar/extras/roboto-font/roboto-font.css',
        '@quasar/extras/material-icons/material-icons.css',
        'quasar/src/css/index.sass',
      ],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 8080
  },
}})