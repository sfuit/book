<template>
  <div>
    <ul>
      <li v-for="item in list">
        <h4>{{item.title}}</h4>
        <p>
          <a href="#" v-for="(_item,index) in item.data" @click="details(_item.name,item.type)">
            <span class="name">{{_item.name}}</span>
            <span class="count">{{_item.bookCount}}</span>
          </a>
        </p>
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
        list:{}
      }
    },
    created(){
      this.getBook()
    },
    methods:{
      getBook:function(){
        axios('/api/cats/lv2/statistics').then((res) =>{
          let list = [
          {
            type:'male',
            title:'男生',
            data:res.data.male
          },
          {
            type:'female',
            title:'女生',
            data:res.data.female
          },
          {
            type:'picture',
            title:'漫画',
            data:res.data.picture
          },
          {
            type:'press',
            title:'出版',
            data:res.data.press
          },
        ]
        this.list = list
        })
      },
      details(name,type){
      this.$router.push({path:`/genre/${type}/${name}`})
      }
    }
  }
</script>

<style lang='less' scoped>
div{
  ul{
    list-style:none;
    padding:0;
    li{
      h4{
        padding:0 10px;
        margin:0;
      }
      p{
        a{
          text-decoration:none;
          padding:10px 0;
          width:32.6%;
          display: inline-block;
          border: 1px solid #f1f1f1;
          span{
            display: block;
            color:black;
            text-align:center;
            &:nth-child(2){
              color:#999;
              font-size:10px;
            }
          }
        }
      }
      i{
        display:block;
        height:40px;
      }
    }
  }
}


</style>
