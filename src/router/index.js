import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Genre from '@/views/genre/index'
import Search from '@/views/search/index'
import Rank from '@/views/rank/index'
import GenreDetails from '@/views/genre/details'
import BookDetail from '@/views/genre/bookDetail'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/genre'
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/genre',
      component: Genre,
      children:[
        {
          path:'/genre/:type/:name',
          component:GenreDetails,
          children:[
            {
              path:'/genre/book/:id',
              component:BookDetail
            }
          ]
        }
      ]
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
})
