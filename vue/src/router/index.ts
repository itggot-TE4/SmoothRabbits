import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { component } from "vue/types/umd";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import("../views/Admin.vue")
  },
  {
    path: "/signin",
    name: "SignInPage",
    component: () => import("../views/SignInPage.vue")
  },
  {
    path: "/logs",
    name: "LogStatus",
    component: () => import("../views/LogStatus.vue")
  },
  {
    path: "/logbook",
    name: "Logbook",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Logbook.vue")
  },
  {
    path: "/weeklog",
    name: "WeekLog",
    component: () => import("../views/WeekLog.vue")
  },
  {
    path: "/dayLog",
    name: "DayLog",
    component: () => import("../views/DayLog.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
