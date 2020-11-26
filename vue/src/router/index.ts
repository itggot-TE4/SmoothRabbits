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
    path: "/signin",
    name: "SignInPage",
    component: () => import("../views/SignInPage.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/admin",
    name: "Admin",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Admin.vue")
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
  }
  // {
  //   // devTesting
  //   path: "/timeline",
  //   name: "CommentTimeline",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/CommentTimeline.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
