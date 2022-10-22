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
import RegisterSuccess from "../pages/RegisterSuccess.vue";
import Cart from "../pages/Cart.vue";
import EditProduct from "../pages/EditProduct.vue";
const routes = [
  { path: "/", component: Home, name: "index" },
  { path: "/detail/:id", component: Detail },
  { path: "/dashboard", component: Dashboard },
  { path: "/transactions", component: Transactions },
  { path: "/my-products", component: MyProduct },
  { path: "/my-products/:id", component: EditProduct },
  { path: "/settings", component: StoreSetting },
  { path: "/my-account", component: MyAccount },
  { path: "/add-product", component: AddProduct },
  { path: "/login", component: Login, name: "login" },
  { path: "/register", component: Register },
  { path: "/register-success", component: RegisterSuccess, name: "success" },
  { path: "/cart", component: Cart },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
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
