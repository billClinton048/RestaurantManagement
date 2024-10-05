import HomeComp from "./components/HomeComp.vue";
import SignIn from "./components/SignIn.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: HomeComp,
    path: "/",
  },
  {
    name: "SignIn",
    component: SignIn,
    path: "/signin",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;