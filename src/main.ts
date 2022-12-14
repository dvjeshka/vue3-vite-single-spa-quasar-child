import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';

// @ts-ignore
globalThis.import_meta_env = JSON.parse('"import_meta_env_placeholder"');

createApp(App).use(router).mount('#app');
