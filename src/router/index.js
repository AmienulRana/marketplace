import { createWebHashHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import NotFound from "../pages/NotFound.vue";
import Detail from "../pages/Detail.vue";
import Dashboard from "../pages/Dashboard.vue";
import Transactions from "../pages/Transaction.vue";
import MyProduct from "../pages/MyProduct.vue";
import MyAccount from "../pages/MyAccount.vue";
import StoreSetting from "../pages/StoreSetting.vue";
import AddProduct from "../pages/AddProduct.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/404", component: NotFound },
  { path: "/detail/:id", component: Detail },
  { path: "/dashboard", component: Dashboard },
  { path: "/transactions", component: Transactions },
  { path: "/my-products", component: MyProduct },
  { path: "/settings", component: StoreSetting },
  { path: "/my-account", component: MyAccount },
  { path: "/add-product", component: AddProduct },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
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
