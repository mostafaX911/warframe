import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import HelpView from "../views/HelpView.vue";
import BlogView from "../views/BlogView.vue";
import FrameView from "../views/FrameView.vue";
import UsersView from "../views/UsersView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/help",
    name: "help",
    component: HelpView,
  },
  {
    path: "/monster/:id",
    name: "monster",
    component: FrameView,
  },
  {
    path: "/users",
    name: "users",
    component: UsersView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
