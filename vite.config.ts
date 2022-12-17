/// <reference types="vitest" />

import { fileURLToPath, URL } from 'url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
//import { ViteTips } from 'vite-plugin-tips';
import Inspector from 'vite-plugin-vue-inspector';
import checker from 'vite-plugin-checker';
import ImportMetaEnvPlugin from '@import-meta-env/unplugin';

export default defineConfig(() => ({
  //root: './src',
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
    //ViteTips(),
    Inspector(),
    checker({ vueTsc: true }),
    vue(),
  ],
  build: {
    //outDir: '../dist',
    //emptyOutDir: true,
  },
  define: {
    'import.meta.vitest': false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      //'@': `${resolve(__dirname, 'src')}`,
    },
  },
  server: {
    port: 8080,
    open: true,
  },
  preview: {
    port: 8081,
  },
}));
