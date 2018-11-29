<template>
  <mt-header class="topTitle" :title="name">
  <router-link to="/genre" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <router-link to="/" slot="right">
    <mt-button class="iconfont icon-zhuye"></mt-button>
  </router-link>
</mt-header>
  <!-- <div class="topTitle">
    <p class="back">
      <span>&lt;</span>
      <span>返回</span>
    </p>
    <p class="title">
      <span>玄幻</span>
    </p>
    <p class="home">
      <span class="iconfont icon-zhuye"></span>
    </p>
  </div> -->
</template>

<script>
import { Header } from 'mint-ui';
  export default {
    props:{
      name:{
        type:String,
        default:""
      }
    },
    data() {
      return {

      }
    },
    created() {
        console.log(this.name)
    },
    methods: {

    },
    components:{
      Header
    }
  }
</script>

<style scoped>
@import '//at.alicdn.com/t/font_895316_8fiwgf36lll.css';
.topTitle{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  display:flex;
  justify-content:space-between;
  padding:0 20px;
  background:#B93321;
  height:44px;
}
.icon-zhuye{
  font-size:18px;

}
</style>
