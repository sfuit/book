<template>
  <div class="header">
      <span class="logo"></span>
    <div class="topNav">
      <router-link to="/search">
        <span>搜索</span>
      </router-link>
      <router-link to="/genre">
        <span>分类</span>
      </router-link>
      <router-link to="rank">
        <span>排行</span>
      </router-link>
    </div>
  </div>
</template>

<script>

  export default {

  }
</script>

<style scoped>
/* @import '//at.alicdn.com/t/font_895316_ytzf9d7ryvf.css'; */
.header{
  padding-top:10px;
  text-align:center;
}
.logo{
  display:block;
  margin:6px auto;
  width:102px;
  height:24px;
  background: url('logo.png');
  background-size:100% 100%;
}
.topNav{
  display:flex;
  margin-top:20px;
  padding:10px 0;
  background:#B93321;
  justify-content:space-around;
}
.topNav>a{
  text-decoration:none;
  color:#DDADA9;
}
a.router-link-active{
  color:#fff;
  border-bottom:2px solid #fff;
}
</style>
