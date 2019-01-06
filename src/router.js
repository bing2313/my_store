import Vue from 'vue'
import Router from 'vue-router'
import home from './components/tabbar/home.vue'
import news from './components/tabbar/news.vue'
import shopcart from './components/tabbar/shopcart.vue'
import prolife from './components/tabbar/prolife.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/' , redirect: '/home'},
    { path: '/home', component: home},
    { path: '/news', component: news},
    { path: '/shopcart', component: shopcart},
    { path: '/prolife', component: prolife}
  ],
  linkActiveClass:'mui-active'
})
