/*
 * @LastEditors: liguobiao
 * @LastEditTime: 2020-08-27 17:02:53
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: window.__POWERED_BY_QIANKUN__ ? '/vue2' : '',
  routes
})

export default router