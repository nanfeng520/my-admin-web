// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Container from '@/components/container'
import SearchForm from '@/components/searchForm'
import TrTable from '@/components/trTable'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
Vue.use(ElementUI)
Vue.config.productionTip = false
import '@/style/index.scss'
Vue.component('zuo-container', Container)
Vue.component('zuo-searchFrom', SearchForm)
Vue.component('zuo-tr-table', TrTable)
store.dispatch('SET_MENU_LIST')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
