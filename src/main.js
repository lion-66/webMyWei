import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/index.css'
import api from './api/music'
import getElement from '@/plugins'
import getVant from '@/plugins/Vant2'
getElement(Vue)
getVant(Vue)
Vue.config.productionTip = false
Vue.prototype.$api = api
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

