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
    path:"/donate",
    name:"Donate",
    component: () => import(/* webpackChunkName: "donate" */"@/views/Donate.vue")
  },
  {
    path:"/donate/:id",
    name:"donate",
    component: () => import(/* webpackChunkName: "donate_full" */"@/components/DonateFull.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()  
})
export default router;
