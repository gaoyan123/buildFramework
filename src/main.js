import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import interfaces from '@/api/index'
import './plugins/element.js'

import './assets/style/main.scss'

Vue.config.productionTip = false
Vue.prototype.$apis = interfaces;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
