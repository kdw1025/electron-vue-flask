import Vue from "vue";
import VueRouter from "vue-router";
import Ping from "../components/Ping.vue";
import Books from "../components/Books.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Books",
    component: Books
  },
  {
    path: "/ping",
    name: "Ping",
    component: Ping
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  // mode: "history",
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes: routes
});

export default router;
