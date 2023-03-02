import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import( '../views/Home.vue')
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: () => import( '../views/FAQ.vue')
    },
    {
        path: '/projects/cruise',
        name: 'Cruise',
        component: () => import( '../views/Cruise.vue')
    },
    {
        path: '/projects/sharknews',
        name: 'SharkNews',
        component: () => import( '../views/SharkNews.vue')
    },
    {
        path: '/projects/deepsel-ecommerce',
        name: 'Deepsel',
        component: () => import( '../views/Deepsel.vue')
    },
    {
        path: '/projects/zest',
        name: 'Zest',
        component: () => import( '../views/Zest.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
