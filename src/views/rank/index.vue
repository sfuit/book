<template>
  <div>
    <ul>
      <li v-for="(item,index) in list">
        <h4>{{item.title}}</h4>
        <div>
          <p v-for="(_item,index) in item.data" v-show="!_item.collapse">
            <img :src="'http://statics.zhuishushenqi.com' + _item.cover"/>
            <span class="count">{{_item.title}}</span>
          </p>
          <p class="selected">
            <i class="iconfont icon-sangedian"><span>别人家的排行榜</span></i>
            <i class="iconfont icon-xiala list" @click='toggle(index)'></i>
          </p>
          <div v-show="item.clickIcon">
            <p v-for="_item in item.data" v-show="_item.collapse">
              <img :src="'http://statics.zhuishushenqi.com' + _item.cover"/>
              <span class="count">{{_item.title}}</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    data(){
      return{
        list:[],
      }
    },
    created(){
      axios('/api/ranking/gender').then((res) =>{
        console.log(res)
        console.log(res.data.male)
        let list = [
          {
            type:'male',
            title:'男生',
            data:res.data.male,
            clickIcon:false
          },
          {
            type:'female',
            title:'女生',
            data:res.data.female,
            clickIcon:false
          },
        ]
        this.list = list
      })
    },
    methods:{
      toggle(index){

        this.list[index].clickIcon = !this.list[index].clickIcon
      }
    }
  }
</script>

<style lang='less' scoped>
@import '//at.alicdn.com/t/font_895316_b44ymdaq67p.css';
div{
  ul{
    padding:0;
    li{
      list-style:none;
      h4,div{
        margin:0;
      }
      h4{
        margin-top:-16px;
        padding:20px 0 20px 10px;
        background:#E6E6E6;
        font-size:10px;
        font-weight:normal;
        color:#999;
      }
      div{
        padding-bottom:10px;
        p{
          display:flex;
          justify-content:start;
          align-items:center;
          margin:0;
          padding:10px 0;
          img{
            width:30px;
            height:30px;
            padding:0 10px;
          }
          span{
          }
        }
        .selected{
          display:flex;
          justify-content:space-between;
          padding:10px 10px;
          .icon-sangedian{
            display:flex;
            align-items:center;
            font-size:36px;
            color:#FF7043;
            span{
              margin-left:4px;
              font-size:14px;
            }
          }
        }
      }
    }
  }
}
</style>
