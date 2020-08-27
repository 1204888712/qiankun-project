/*
 * @LastEditors: liguobiao
 * @LastEditTime: 2020-08-27 17:18:19
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// //系统错误捕获
// const errorHandler = (error, vm)=>{
//   console.error('抛出全局异常');
//   console.error(vm);
//   console.error(error);
// }

// Vue.config.errorHandler = errorHandler;
// Vue.prototype.$throw = (error)=> errorHandler(error,this)
let instance = null;
function render() {
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
}

/**
 * 不存在主应用时可直接单独运行
 */
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("react app bootstraped");
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  // container: div#__qiankun_microapp_wrapper_for_vue_app_2_1598515027799_791__
  // instance: Vue {_uid: 2, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}
  // mountParcel: ƒ ()
  // name: "vue-app-2"
  // onGlobalStateChange: ƒ onGlobalStateChange(callback, fireImmediately)
  // setGlobalState: ƒ setGlobalState()
  // singleSpa: {…}
  console.log("props", props);
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
  }, false);
  // props.setGlobalState({ a: 1 });
  setTimeout(() => {
    props.setGlobalState({ a: 1 });
    // props.singleSpa?.navigateToUrl('/vue')
  }, 5000);
  render();
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log("unmount_arguments", arguments);
  instance.$destroy();
  instance = null;
}
