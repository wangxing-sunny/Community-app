import Vue from 'vue'
import {Tabbar, TabItem, Swipe, SwipeItem, Navbar, Cell, Header, Button} from 'mint-ui';
import 'mint-ui/lib/style.css'
import '@/assets/style/main.css'
import Vuex from 'vuex'

import App from './app'

import router from './router'

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Navbar.name, Navbar)
Vue.component(Cell.name, Cell)
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)

Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
