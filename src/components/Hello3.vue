<template>
  <div class="hello3">
    <h1>Home3....</h1>
    {{$store.state.txt}}
    <router-link to="/">Home</router-link>
    
  </div>
</template>

<script>
export default {
  name: 'hello3',
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
