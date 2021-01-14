import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/donates/:server",
    name: "donates",
    component: () =>
      import(/* webpackChunkName: "donate_by_server" */ "@/views/Donate.vue")
  },
  {
    path: "/servers",
    name: "Servers",
    component: () =>
      import(/* webpackChunkName: "donate" */ "@/views/Servers.vue")
  },
  {
    path: "/donate/:id",
    name: "donate",
    component: () =>
      import(
        /* webpackChunkName: "donate_full" */ "@/components/DonateFull.vue"
      )
  },
  {
    path: "/rules",
    name: "rules",
    component: () => import(/* webpackChunkName: "rules" */ "@/views/Rules.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
