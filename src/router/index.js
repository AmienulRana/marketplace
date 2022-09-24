import { createWebHashHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import NotFound from "../pages/NotFound.vue";
import Detail from "../pages/Detail.vue";
import Dashboard from "../pages/Dashboard.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/404", component: NotFound },
  { path: "/detail/:id", component: Detail },
  { path: "/dashboard", component: Dashboard },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
    meta: {
      requiresAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
