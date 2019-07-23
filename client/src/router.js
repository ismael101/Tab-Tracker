import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Songs from './views/Songs.vue'
import CreateSong from './views/CreateSong'
import ViewSong from './views/ViewSong'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/songs',
      name:'songs',
      component:Songs
    },
    {
      path:'/songs/create',
      name:'songs-create',
      component:CreateSong
    },
    {
      path:'/songs/:id',
      name:'song',
      component:ViewSong
    }
  ]
})
