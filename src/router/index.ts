// Composables
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Index.vue"),
    children: [
      {
        path: "",
        name: "Index",
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
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
