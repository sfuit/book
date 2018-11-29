<template>
  <div class="hello">

  </div>
</template>

<script>
import axios from 'axios'
export default {
  created(){
    axios('/api/cats/lv2/statistics').then((res) =>{
      console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
