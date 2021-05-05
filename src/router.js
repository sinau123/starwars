import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('@/pages/Home.vue') },
  {
    path: '/planets',
    name: 'planets',
    component: () => import('@/pages/Planets.vue'),
  },
  {
    path: '/films',
    name: 'films',
    component: () => import('@/pages/Films.vue'),
  },
  {
    path: '/species',
    name: 'species',
    component: () => import('@/pages/Species.vue'),
  },
  {
    path: '/vehicles',
    name: 'vehicles',
    component: () => import('@/pages/Vehicles.vue'),
  },
  {
    path: '/starships',
    name: 'starships',
    component: () => import('@/pages/Starships.vue'),
  },

  {
    path: '/people',
    name: 'people',
    component: () => import('@/pages/People.vue'),
  },
]
export default createRouter({
  history: createWebHistory(),
  routes,
})
