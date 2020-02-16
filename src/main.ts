import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import LayoutWithNav from '@/components/LayoutWithNav.vue'

Vue.config.productionTip = false

Vue.component('Nav',Nav)
Vue.component('LayoutWithNav',LayoutWithNav)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
