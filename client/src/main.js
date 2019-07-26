import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '../src/components/Panel'


Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)
Vue.component('panel',Panel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
