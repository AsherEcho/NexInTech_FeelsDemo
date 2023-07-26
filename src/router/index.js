import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import WelcomeView from "@/views/welcome/WelcomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "welcome",
    component: WelcomeView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
