<!--
 * @LastEditors: liguobiao
 * @LastEditTime: 2020-08-27 17:49:26
-->
<template>
  <div class="about">
    this is about page
    <!-- <router-link ><button>离开这里</button></router-link> -->
    <button @click="leavehere">离开这里</button>
    <a href="http://localhost:8080/vue2#/">asdasd</a>
    <button @click="leavehere2">离开这里2</button>
    <a href="http://localhost:8080/vue">asdasd</a>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    console.log(to, from);
    let res = confirm("离开吗？");
    console.log("from", from);
    if (res) next();
    else this.$router.push(from.path).catch(() => {});
  },
  data() {
    return {};
  },
  created() {
    // window.onhashchange = function() {
    //   confirm("离开吗？");
    // };
  },
  methods: {
    leavehere() {
      window.open("http://localhost:8080/vue2#/", "_self");
    },
    leavehere2() {
      // this.$router.push("http://localhost:8080/vue", true);
      window.open("http://localhost:8080/vue", "_self");
    },
  },
};
</script>
<style lang="less" scoped></style>
