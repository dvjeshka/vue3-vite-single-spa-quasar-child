/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import compress from 'vite-plugin-compress'
import { ViteTips } from 'vite-plugin-tips'
import Inspector from 'vite-plugin-vue-inspector'
import checker from 'vite-plugin-checker'
//import eslintPlugin from "@nabla/vite-plugin-eslint";
import eslint from 'vite-plugin-eslint'

const envPrefix = 'VUE_APP_'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '', envPrefix)
  const isProd = mode === 'production'
  return {
    test: {
      globals: true,
      environment: 'happy-dom',
      coverage: {
        reportsDirectory: './test/until/.coverage',
        all: true,
        src: './src',
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
      reporters: 'vitest-sonar-reporter',
      outputFile: 'test-report.xml',
    },
    envPrefix,
    plugins: [
      ViteTips(),
      Inspector(),
      checker({
        vueTsc: true,
        /*    eslint: {
          lintCommand: 'eslint .',
        },*/
      }),
      vue({ template: { transformAssetUrls } }),
      quasar({ autoImportComponentCase: 'pascal' }),
      compress({ verbose: true, brotli: false }),
      //eslintPlugin()
      //eslint({ fix: true }),
    ],
    // Указываем фактический адрес этого микрофронта в проде, чтобы рут приложение имело правильные ссылки на чанки этого микрофронта
    base: isProd ? env.VUE_APP_BASE_URL : '/',
    build: {
      // reportCompressedSize: false,
      minify: true,
      // sourcemap: true,
      target: 'esnext',
      rollupOptions: {
        preserveEntrySignatures: true, // Оставляет exports для single spa
        input: {
          index: './index.html',
          app: './src/main.ts',
        },
        output: { entryFileNames: 'js/[name].js' },
        external: [
          'vue',
          // 'vue-router',
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
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      port: 3000,
      open: true,
    },
    preview: {
      port: 8080,
    },
  }
})
