<!--
 * @LastEditors: liguobiao
 * @LastEditTime: 2020-08-27 17:56:00
-->
<template>
  <div id="main-app">
    <div id="nav">
      <router-link to="/">mian-app</router-link> |
      <router-link to="/about">mian-app-about</router-link> |
      <router-link to="/vue">vue-app</router-link> |
      <router-link to="/vue2"> vue-app-2</router-link> |
      <router-link to="/vue3">vue-3</router-link> 
    </div>
    <!-- 这里需要判断是不是主路由，否则router-view和qiankun会一起渲染 -->
    <router-view />
    <div id="qiankun-app"></div>
  </div>
</template>

<style lang="less">
#main-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
