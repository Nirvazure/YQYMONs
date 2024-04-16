// Composables
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Index.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: "/squad",
    name: "Squad",
    component: () => import("@/views/TeamSquad.vue"),
  },
  {
    path: "/teamshow",
    name: "Teamshow",
    component: () => import("@/views/TeamShow.vue"),
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("@/views/TeamShop.vue"),
  },
] as unknown as RouteRecordRaw[]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
