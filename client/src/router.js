import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Songs from './views/Songs.vue'
import CreateSong from './views/CreateSong'
import ViewSong from './views/ViewSong'
import EditSong from './views/EditSong'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
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
    },
    {
      path:'/songs/edit/:id',
      name:'edit',
      component:EditSong
    }
  ]
})
