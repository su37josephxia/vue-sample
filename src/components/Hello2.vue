<template>
  <div class="hello2">
    Home2....
    <router-link to="/">Home2</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello2',
  data () {
    return {

    }
  },
  methods: {

  },
  created: function () {
    console.log('created....',this.msg)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
