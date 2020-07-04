import Vue from 'vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import './plugins/vuetify'
import App from './App.vue'
require('./assets/styles/tailwind.css')

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
// nms: perfect
