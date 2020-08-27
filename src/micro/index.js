/*
 * @LastEditors: liguobiao
 * @LastEditTime: 2020-08-27 17:23:23
 */
import {
  registerMicroApps,
  start,
  addGlobalUncaughtErrorHandler,
  initGlobalState,
} from "qiankun";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ parent: "#qiankun-app" });
export default function(instance) {
  // 通信
  let state = { a: 0 };
  const actions = initGlobalState(state);
  actions.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
  });
  //   actions.setGlobalState(state);
  //   actions.offGlobalStateChange();

  const apps = [
    {
      name: "vue-app-2", // app name registered
      entry: "//localhost:8082",
      container: "#qiankun-app",
      activeRule: "/vue2",
      props: { instance },
    },
    {
      name: "vue-app", // app name registered
      entry: "//localhost:8081",
      container: "#qiankun-app",
      // activeRule: (value) => {
      //   return value?.pathname.includes("/vue");
      // },
      activeRule: "/vue",
      props: { instance },
    },
  ];
  registerMicroApps(apps, {
    beforeLoad: () => {
      // 加载微应用前，加载进度条
      NProgress.start();
      return Promise.resolve();
    },
    afterMount: () => {
      NProgress.done();
      return Promise.resolve();
    },
    // beforeUnmount: () => {
    //   console.log(arguments);
    //   return Promise.reject('asdasd')
    // },
  });

  addGlobalUncaughtErrorHandler((event) => {
    console.log("主应用接到抛出", event);
    const { msg } = event;
    NProgress.done();
    // 加载失败时提示
    if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
      Message.error("微应用加载失败，请检查应用是否可运行");
    }
  });
  //   start({ singular: false });
  start({ prefetch: "all" });
}
