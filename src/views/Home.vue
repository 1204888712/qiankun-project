<!--
 * @LastEditors: liguobiao
 * @LastEditTime: 2020-08-27 14:21:10
-->
<template>
  <div class="home">
    main-page
    <router-view></router-view>
    <div id="qiankun-app"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
