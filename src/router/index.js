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
        path: '/cruise',
        name: 'Cruise',
        component: () => import( '../views/Cruise.vue')
    },
    {
        path: '/sharknews',
        name: 'Cruise',
        component: () => import( '../views/SharkNews.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
