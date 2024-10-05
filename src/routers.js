import HomeComp from "./components/HomeComp.vue";
import SignIn from "./components/SignIn.vue";
import LoginPage from "./components/LoginPage.vue";
import UpdateHotel from "./components/UpdateHotel.vue";
import AddHotel from "./components/AddHotel.vue";
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
  {
    name: "Login",
    component: LoginPage,
    path: "/login", 
  },
  {
    name: "Update",
    component: UpdateHotel,
    path: "/update",
  },
  {
    name: "Add",
    component: AddHotel,
    path: "/add",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;