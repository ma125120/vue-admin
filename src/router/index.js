import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Layout from "@/layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    title: "登录页",
    component: () => import("../views/login")
  },
  {
    path: "/",
    name: "Home",
    title: "首页",
    component: Layout
  },
  {
    path: "/user",
    name: "user",
    title: "首页",
    component: Layout,
    children: [
      {
        path: "/",
        name: "user/table",
        title: "查看用户",
        component: () => import("../views/user")
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   title: "关于页面",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
