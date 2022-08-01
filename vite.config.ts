/// <reference types="vitest" />

import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import compress from 'vite-plugin-compress';
import { ViteTips } from 'vite-plugin-tips';
import Inspector from 'vite-plugin-vue-inspector';
import checker from 'vite-plugin-checker';
import ImportMetaEnvPlugin from '@import-meta-env/unplugin';

export default defineConfig(() => ({
  root: './src',
  envPrefix: [], // https://iendeavor.github.io/import-meta-env/guide.html#framework-specific-notes
  test: {
    dir: './',
    includeSource: ['./src/**/*.ts'],
    environment: 'happy-dom',
    coverage: {
      reportsDirectory: '../test/utils/.coverage',
      src: ['./src'],
      /*    all: true,
          lines: 80,
          functions: 80,
          branches: 80,
          statements: 80,*/
    },
    reporters: 'vitest-sonar-reporter',
    outputFile: '../test-report.xml',
  },
  plugins: [
    ImportMetaEnvPlugin.vite({
      env: '.env.default',
      example: '.env.runtime',
    }),
    ViteTips(),
    Inspector(),
    checker({ vueTsc: true }),
    vue({ template: { transformAssetUrls } }),
    quasar({ autoImportComponentCase: 'pascal' }),
    compress({ verbose: true, brotli: false }),
  ],
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: 'esnext',
    rollupOptions: {
      preserveEntrySignatures: 'strict', // Оставляет exports для single spa
      input: {
        index: '/index.html',
        app: '/main.ts',
      },
      output: { entryFileNames: 'js/[name].js' },
      external: [
        'vue',
        'vue-router',
        'singleSpaVue',
        'quasar',
        'quasar/lang/ru',
        '@quasar/extras/roboto-font/roboto-font.css',
        '@quasar/extras/material-icons/material-icons.css',
        'quasar/src/css/index.sass',
        'axios',
        '@vueuse/integrations/useAxios',
      ],
    },
  },
  define: {
    'import.meta.vitest': false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 8080,
    open: true,
  },
  preview: {
    port: 8080,
  },
}));
