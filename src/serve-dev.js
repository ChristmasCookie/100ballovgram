import Vue from 'vue'
import ServeDev from './serveDev.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(ServeDev)
}).$mount('#app')
