<template>
  <div class="list" >
    <!-- <h3 v-for="it in data">{{it}}</h3> -->
  </div>
</template>

<script>
export default {
  name: 'list',
  props: ['data'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    background-color:antiquewhite;
    border-radius: 30px;
    border:1px solid #F00;
    margin:2px;
  }
  div {
    background-color: #9da0a4;
    border:1px solid #b5d592;
  }

</style>
