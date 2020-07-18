import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import '@/assets/sass/globalstyle.scss'
import '@mdi/font/css/materialdesignicons.css'
import '@/plugins/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
