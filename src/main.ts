import { createApp, h } from 'vue';
import singleSpaVue from 'single-spa-vue';

import * as QuasarForTreeShaking from 'quasar';
import locale from 'quasar/lang/ru';
import App from '@/App.vue';
import router from '@/router';

// @ts-ignore
globalThis.import_meta_env = JSON.parse('"import_meta_env_placeholder"');

// if (import.meta.env.DEV) {
import('@quasar/extras/roboto-font/roboto-font.css');
import('@quasar/extras/material-icons/material-icons.css');
import('quasar/src/css/index.sass');
// }

function commonAppUses(app: any) {
  return app.use(router).use(
    QuasarForTreeShaking.Quasar,
    import.meta.env.DEV
      ? {
          lang: locale,
          config: {
            brand: {
              primary: '#024079',
              secondary: '#26A69A',
              accent: '#9C27B0',
              dark: '#1D1D1D',
              positive: '#21BA45',
              negative: '#C10015',
              info: '#31CCEC',
              warning: '#F2C037',
            },
          },
        }
      : {}
  );
}

commonAppUses(createApp(App)).mount('#app');

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App);
    },
  },
  handleInstance: (app) => {
    commonAppUses(app);
  },
});

export const { bootstrap, mount, unmount } = vueLifecycles;
