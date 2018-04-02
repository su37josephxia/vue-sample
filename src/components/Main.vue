<template>
  <div>
    Main---
    <router-link to="/Main/h2">Page2</router-link>
    <router-link to="/Main/h3">Page3</router-link>

  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {};
  }
  // components: { List }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
