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
    path: '/projects',
    name: 'Projects',
    component: () => import( '../views/Projects.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
