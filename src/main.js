import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mintUi from 'mint-ui'
import resource from 'vue-resource'
import 'mint-ui/lib/style.min.css'
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'

Vue.config.productionTip = false
Vue.use(mintUi)
Vue.use(resource)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
