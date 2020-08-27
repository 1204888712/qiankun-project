<!--
 * @LastEditors: liguobiao
 * @LastEditTime: 2020-08-27 17:52:41
-->
<template>
  <div>
      
       <a href="http://localhost:8080/vue">aa</a>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    console.log(from, to);
    if (from.hash !== "#/about") return next();
    let res = confirm("离开吗？(主应用)");
    if (res) next();
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped></style>
