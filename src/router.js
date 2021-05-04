import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/pages/Home.vue') },
  { path: '/planets', component: () => import('@/pages/Planets.vue') },
]
export default createRouter({
  history: createWebHistory(),
  routes,
})
