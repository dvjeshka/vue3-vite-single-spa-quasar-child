/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VUE_APP_BACKOFFICE_API_PREFIX: string
  readonly VUE_APP_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
