import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import('@/views/home'),
  },
  {
    path: "/login",
    name: "login",
    component: () => import('@/views/login'),
  },
  {
    path: "/enroll",
    name: "enroll",
    component: () => import('@/views/login/Enroll.vue'),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
