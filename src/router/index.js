import Vue from 'vue'
import Router from 'vue-router'
// import home from './home'
// import listLayout from './listLayout'
import staticStateRoute from './staticStateRoute'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    ...staticStateRoute // 静态路由
    // ...home, // 首页
    // ...listLayout // 列表布局组件
  ]
})
