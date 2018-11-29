<template>
  <div id="app">
    <header-title></header-title>
    <router-view/>
  </div>
</template>

<script>
import HeaderTitle from '@/components/header'
export default {
  components:{
    HeaderTitle
  }
}
</script>

<style>
html,body,#app {
  margin:0;
  padding:0;
}
</style>
