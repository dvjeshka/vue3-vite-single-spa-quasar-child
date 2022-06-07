import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

const envPrefix = 'VUE_APP_'

export default defineConfig(({ mode}) => {
const env = loadEnv(mode, '', envPrefix);

return {
  envPrefix,
  plugins: [
    vue({ template: { transformAssetUrls }}),
    quasar({
      autoImportComponentCase: 'pascal',
    })
  ],
  base: env.VUE_APP_BASE_URL, // Указываем фактический адрес этого микрофронта, чтобы рут приложение имело правильные ссылки на чанки этого микрофронта
  build: {
    target: 'esnext',
    rollupOptions: {
      preserveEntrySignatures: true, // Оставляет exports для single spa
      input: { app: "./src/main.ts" },
      output: { entryFileNames: "js/[name].js" },
      external: [
        'vue',
        //'vue-router',
        //'singleSpaVue',
        //'quasar',
        //'quasar/lang/ru',
        //'@quasar/extras/roboto-font/roboto-font.css',
        //'@quasar/extras/material-icons/material-icons.css',
        //'quasar/src/css/index.sass',
      ],
    },
  },
  resolve: {
    alias: {
      "@": '/src',
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
