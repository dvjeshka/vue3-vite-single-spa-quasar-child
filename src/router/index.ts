import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component:()=> import('@/views/Home.vue')
    },
    {
        path: '/turnover',
        name: 'turnover',
        component:()=> import('@/views/Turnover.vue')
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
})

export default router;