import Vue from 'vue'
import Router from 'vue-router'
import home from './components/tabbar/home.vue'
import news from './components/tabbar/news.vue'
import shopcart from './components/tabbar/shopcart.vue'
import prolife from './components/tabbar/prolife.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/' , redirect: '/home'},
    { path: '/home', component: home},
    { path: '/news', component: news},
    { path: '/shopcart', component: shopcart},
    { path: '/prolife', component: prolife},
    { path: '/home/newslist', component: newslist},
    { path: '/newsinfo/:id', component: newsinfo}
  ],
  linkActiveClass:'mui-active'
})
