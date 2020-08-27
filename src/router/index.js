/*
 * @LastEditors: liguobiao
 * @LastEditTime: 2020-08-27 17:55:31
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/vue2",
        name: "vue2",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/vue2.vue"),
        // beforeEnter: (to, from, next) => {
        //   // ...
        //   console.log(21222222222);
        //   next();
        // },
      },
      {
        path: "/vue3",
        name: "vue3",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/vue3.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});
// router.beforeEach((to, from, next) => {
//   // ...
//   console.log(from);
//   if (from?.fullPath !== "/vue2#/about") next();
// });
export default router;
