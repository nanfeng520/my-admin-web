import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'MyRoot',
    component: ()=> import('@/views/startContainer/root.vue'),
    redirect: '/listLayout',
    children: [
      {
        path: 'listLayout',
        name: 'listLayout',
        component: ()=> import('@/views/listLayout/index.vue'),
        meta: {
          title: "列表布局组件",
          icon:"el-icon-menu",
        }
      },
      {
        path: 'myQwzs',
        name: 'MyQwzs',
        component:()=> import('@/views/qwzs/index.vue') ,
        meta: {
          title: "忽复乘舟梦日边",
          icon:"el-icon-document",
        }
      }
    ]
  }]
})
