import Vue from 'vue'
import App from './App.vue'
import VueTreeList from 'vue-tree-list'

Vue.use(VueTreeList)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
