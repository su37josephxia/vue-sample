<template>
  <div class="hello">
    <h1>txt:{{$store.state.txt}}</h1>
    <!--<a v-link="{path:'/h2'}">Go H2</a>-->
    <router-link to="/h2">Page2</router-link>
    <router-link to="/h3">Page3</router-link>
    <list v-bind:data="ary"></list>
  </div>
</template>

<script>
import List from '@/components/list'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'chart',
      ary: []
    }
  },
  methods: {
    click: function() {
      this.msg += '>'
      this.ary.push('aaa')

//      ary.map(v => {
//        console.log('click...',v)
//      })


    }
  },
  created: function () {
    console.log('created....',this.msg)
  },
  components: { List }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
