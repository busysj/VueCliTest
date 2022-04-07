import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component() {
      return import("../views/LoginView.vue");
    },
  },
  {
    path: "/list",
    name: "list",
    component() {
      return import("../views/ListView.vue");
    },
    children: [
      {
        path: ":page",
        component() {
          return import("../components/PageComponent.vue");
        },
      },
    ],
  },
  {
    path: "/user/:user",
    name: "user",
    component() {
      return import("../views/UserView.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
