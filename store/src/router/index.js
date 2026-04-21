import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/test01',
      name: 'test01',
      component: () => import('../views/Test01View.vue'),
    },
    {
      path: '/test02',
      name: 'test02',
      component: () => import('../views/Test02View.vue'),
    },
  ],
})

export default router
