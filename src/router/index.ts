import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/pages/PageTailwind.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/PageHome.vue'),
  },
  {
    path: '/turnover',
    name: 'turnover',
    component: () => import('@/pages/PageTurnover.vue'),
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
