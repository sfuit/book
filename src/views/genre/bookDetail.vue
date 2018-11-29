<template>
  <div class="bookDetail">
    <mt-header class="topTitle" title="书籍详情">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="back">返回</mt-button>
      </router-link>
      <router-link to="/" slot="right">
        <mt-button class="iconfont icon-zhuye"></mt-button>
      </router-link>
    </mt-header>
    <ul>
      <li class="bookInfo">
        <img :src="'//statics.zhuishushenqi.com' + this.info.cover" alt="">
        <div class="info">
          <span class="desc">
            <p class="name">{{this.info.title}}</p>
            <p class="author">{{this.info.author}}<b>|</b><span>{{this.info.majorCate}}</span><b>|</b><span>{{this.info.wordCount}}字</span></p>
            <p class="update">7小时前更新</p>
          </span>
        </div>
      </li>
      <li class="operate">
        <p>加入书架</p>
        <p>开始阅读</p>
      </li>
      <li class="descript">
        <p><span class="de">追人气</span><span>{{this.info.latelyFollower}}</span></p>
        <p><span class="de">读者留存率</span><span>{{this.info.retentionRatio}}%</span></p>
        <p><span class="de">日更新字数/天</span><span>{{this.info.serializeWordCount}}</span></p>
      </li>
      <li class="intro">
        <p>{{this.info.longIntro}}</p>
      </li>
      <li class="catalog">
        <span>目录</span>
        <span>[7小时前更新] {{this.info.lastChapter}}</span>
        <img src="~@/assets/images/jiantou.png" />
        <!-- <i class="iconfont icon-xiala"></i> -->
      </li>
      <li class="hotComment">
        <p class="top">
          <span>热门书评</span>
          <span>更多评论</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { InfiniteScroll } from 'mint-ui'
import { Header } from 'mint-ui'
import axios from 'axios'
  export default {
    props:{
      id:{
        title:String,
        default:''
      }
    },
    data() {
      return {
        info:{}
      }
    },
    created() {
      this.getBookInfo()
    },
    methods: {
      getBookInfo:function(){
        axios(`/api/book/${this.$route.params.id}`).then((res) => {
          console.log(res.data)
          this.info = res.data
        })
      },
      back:function(){
        this.$router.back();
      },
      toggle(){
        // this.$refs.showCata.style =
      }
    }
  }
</script>

<style lang='less' scoped>
@import '//at.alicdn.com/t/font_895316_b44ymdaq67p.css';
.bookDetail{
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  background:#fff;
  width:100%;
  p{
    margin:0;
  }
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
  ul{
    position: fixed;
    width:100%;
    top:44px;
    bottom:0;
    left:0;
    padding:0;
    list-style:none;
    .bookInfo{
      display:flex;
      padding:22px;
      img{
        width:66px;
        height:88px;
      }
      .info{
        display:flex;
        .desc{
          padding-left:12px;
          p{
            margin:0;
            padding-bottom:6px;
          }
          .author{
            font-size:12px;
            color:#b93321;
            span{
              color:#999;
            }
          }
          b{
            padding:0 12px;
            color:#999;
          }
          .update{
            font-size:12px;
            color:#999;
          }
        }
      }
    }
    .operate{
      display:flex;
      justify-content:space-around;
      p{
        width:38%;
        height:44px;
        line-height:44px;
        text-align:center;
        margin:0;
        &:nth-child(1){
          color:#B93321;
          border:1px solid #B93321;
        }
        &:nth-child(2){
          color:#fff;
          background:#B93321;
        }
      }
    }
    .descript{
      border-top:1px solid 	#ebebeb;
      border-bottom:1px solid #ebebeb;
      margin-top:20px;
      padding:16px 0;
      display:flex;
      justify-content:space-around;
      p{
        display:flex;
        flex-direction:column;
        text-align:center;
        span{
          font-size:16px;
        }
        .de{
          font-size:12px;
          color:#999;
          padding-bottom:4px;
        }
      }
    }
    .intro{
      padding-left:22px;
      p{
        padding:22px 22px 22px 0;
        font-size:13px;
        line-height:26px;
        border-bottom:1px solid #ebebeb;
      }
    }
    .catalog{
      display:flex;
      justify-content:space-between;
      padding:16px 16px 16px 22px;
      border-bottom:1px solid #ebebeb;
      line-height:18px;
      span{
        &:nth-child(2){
          width:60%;
          font-size:12px;
          color:#999;
          text-overflow:ellipsis;
          overflow:hidden;
          white-space:nowrap;
          margin-right:-50px;
        }
      }
      img{
        width:12px;
        height:12px;
        margin-top:4px;
        transform:rotate(-90deg);
      }
      /* .icon-xiala{
        width:20px;
        height:20px;
        font-size:20px;
        position:fixed;
        z-index:99;
        transform:rotate(-90deg);
      } */
    }
    .hotComment{
      padding:12px 22px;
      .top{
        display:flex;
        justify-content:space-between;
        font-size:14px;
        span{
          &:nth-child(2){
            font-size:12px;
            color:#999;
          }
        }
      }
    }
  }
}
</style>
