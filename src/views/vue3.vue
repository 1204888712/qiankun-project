<!--
 * @LastEditors: liguobiao
 * @LastEditTime: 2020-08-27 17:57:32
-->
<template>
  <div>
    <button @click="sss">b</button>
    <button @click="ssss">c</button>
    <a href="http://localhost:8080/vue">aa</a>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    console.log(from, to);
    let res = confirm("离开吗？(主应用)");
    if (res) next();
  },
  data() {
    return {};
  },
  methods: {
    sss() {
      this.$router.push("/vue");
    },
    ssss() {
      window.open("http://localhost:8080/vue", "_self");
    },
  },
};
</script>
<style lang="less" scoped></style>
