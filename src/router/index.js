import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'MyRoot',
    component: () => import('@/views/startContainer/root.vue'),
    redirect: '/listLayout',
    children: [
      {
        path: 'listLayout',
        name: 'ListLayout',
        component: () => import('@/views/listLayout/index.vue'),
        meta: {
          title: '列表布局组件',
          icon: 'el-icon-menu'
        }
      },
      {
        path: 'dragInsert',
        name: 'DragInsert',
        component: () => import('@/views/dragInsert/index.vue'),
        meta: {
          title: '拖拽插入示例',
          icon: 'el-icon-document'
        }
      },
      {
        path: 'searchFormDemo',
        name: 'SearchFormDemo',
        component: () => import('@/views/searchFormDemo/index.vue'),
        meta: {
          title: '动态表单示例',
          icon: 'el-icon-document',
          noCache: true
        }
      }
    ]
  }]
})
