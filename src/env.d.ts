/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly VUE_APP_BACKOFFICE_API_PREFIX: string;
  readonly TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
