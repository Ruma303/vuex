import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: '',
            component: HomeView
        },
        {
            path: '/cakes',
            name: '',
            component: () => import('@/views/CakesView.vue')
        },
        {
            path: '/coffees',
            name: '',
            component: () => import('@/views/CoffeeView.vue')
        },
    ]
});

export default router;