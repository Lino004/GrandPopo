import Vue from 'vue'
import Root from './Root.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  router,
  render: h => h(Root)
}).$mount('#app')
