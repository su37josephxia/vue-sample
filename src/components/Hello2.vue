<template>
  <div class="hello2">
    <h1>Home2....</h1>
    <router-link to="/">Home</router-link>
    <input v-model="$store.state.txt"> 
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
    console.log('hello2....',this.$store.state.txt)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
