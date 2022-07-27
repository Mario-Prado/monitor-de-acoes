import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './axios/axios'

Vue.config.productionTip = false

Vue.filter('dinheiro', valor => `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ','))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
