// 导入所需的文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mintUi from 'mint-ui'
import moment from 'moment'
import resource from 'vue-resource'
import 'mint-ui/lib/style.min.css'
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'

// 注册一下
Vue.config.productionTip = false
Vue.use(mintUi)
Vue.use(resource)


// 全局的过滤器格式化时间
Vue.filter('timeFormat',function(dataStr,format="YYYY-MM-DD hh:mm:ss"){
  // 使用Node.js插件 comment 格式化时间
  return moment(dataStr).format(format);
});

// 注册全局的请求地址
Vue.http.options.root = 'http://www.liulongbin.top:3005';

// vm实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
