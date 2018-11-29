<template>
  <div class="genreDetails">
    <mt-header class="topTitle" :title="this.$route.params.name">
      <router-link to="/genre" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <router-link to="/" slot="right">
        <mt-button class="iconfont icon-zhuye"></mt-button>
      </router-link>
    </mt-header>
    <div class="topNav">
      <p>
        <span>热门</span>
        <b>新书</b>
        <b>好评</b>
        <b>完结</b>
        <b>包月</b>
      </p>
      <p>
        <span>全部</span>
        <b v-for="item in delGen">{{item}}</b>
      </p>
    </div>
    <div class="bookList">
      <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <li  v-for='item in list' @click="bookDetail(item._id)" v-show="item.title" :title="item.majorCate">
          <img :src="'//statics.zhuishushenqi.com' + item.cover">
          <div class="profile">
            <p class="title">{{item.title}}</p>
            <p class="author"><span>{{item.author}}</span><b class="split">|</b><span>{{item.majorCate}}</span></p>
            <p class="shortIntro">{{item.shortIntro}}</p>
            <p class="info"><span>{{item.latelyFollower}}<b>人气</b></span><b class="split">|</b><span>{{item.retentionRatio}}%<b>读者留存</b></span></p>
          </div>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { InfiniteScroll } from 'mint-ui'
import { Header } from 'mint-ui'
import axios from 'axios'
export default {
  data() {
    return {
      delGen:[],
      list:[],
    }
  },
  created() {
    axios('/api/cats/lv2').then((res) => {
      this.delGen = res.data[this.$route.params.type].filter((x)=>x.major===this.$route.params.name)[0].mins
    })
    this.getDelGen()
  },
  methods: {
    getDelGen:function(){
      axios(`/api/book/by-categories?gender=${this.$route.params.type}&type=hot&major=${this.$route.params.name}&minor=&start=0&limit=20`).then((res) => {
        this.list = res.data.books
      })
    },
    bookDetail(id){
      this.$router.push({path:`/genre/book/${id}`})
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
  },
  components:{
    InfiniteScroll,
    Header
  }
}
</script>

<style lang='less' scoped>
@import '//at.alicdn.com/t/font_895316_8fiwgf36lll.css';
.genreDetails{
  position:fixed;
  background:#FAFAFA;
  top:0;
  bottom:0;
  width: 100%;
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
    .icon-zhuye{
      font-size:18px;
    }
  }
  .topNav{
    margin-top:44px;
    background:#fff;
    font-size:13px;
    color:#999;
    p{
      margin:0;
      padding:8px 0 8px 8px;
      overflow-x: auto;
      height:21px;
      width: auto;
      white-space:nowrap;
      span{
        color:#B93321;
      }
      &:nth-child(2){
        border-top:1px solid #999;
        padding-right:20px;
      }
      b{
        padding-left:14px;
        font-weight:normal;
      }
    }
  }
  .bookList{
    position:fixed;
    top:120px;
    left:0;
    bottom:0;
    overflow-y:auto;
    overflow-x:hidden;
    ul{
      height:100%;
      list-style:none;
      padding:0;
      margin-top:0;
      background:#F5F2ED;
      li{
        display:flex;
        padding:16px 20px 16px 0;
        margin-left:20px;
        border-bottom:1px solid #999;
        img{
          width:58px;
          height:83px;
        }
        .profile{
          width:80%;
          padding-left:16px;
          p{
            margin:0;
            padding:2px 0;
            .split{
              padding:0 10px;
              color:#999;
            }
          }
          .title{
            font-size:14px;
            color:#333;
            font-weight:bold;
          }
          .author{
            color:#999;
            font-size:12px;
          }
          .shortIntro{
            color:#999;
            font-size:12px;
            text-overflow:ellipsis;
            overflow:hidden;
            white-space:nowrap;
          }
          .info{
            font-size:12px;
            span{
              color:#b93321;
              b{
                color:#666;
                font-weight:normal
              }
            }
          }
        }
      }
    }
  }
}
</style>
