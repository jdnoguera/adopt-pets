import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/css/bootstrap-vue.css'
import './assets/sass/index.sass'

import App from './App.vue'
import router from './router/router'
import store from './store'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
