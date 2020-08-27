/*
 * @LastEditors: liguobiao
 * @LastEditTime: 2020-08-27 16:16:07
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import qiankunStart from '@/micro'

Vue.config.productionTip = false;

const instance = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#main-app");

qiankunStart(instance)
