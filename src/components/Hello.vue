<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="click">add</button>
    <!--<h2 v-for="it in list" v-bind="it"></h2>-->
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'chart',
      list: []
    }
  },
  methods: {
    click: function () {
      this.msg += '>'
//      this.list.push('aaa')
    }
  },
  created: function () {
    console.log('created....',this.msg)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
