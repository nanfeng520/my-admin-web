import Layout from '@/views/startContainer/root.vue'
export default [
  {
    path: '/componentDisplay',
    name: 'componentDisplay',
    component: Layout,
    meta: {
      title: '组件展示',
      icon: 'el-icon-menu'
    },
    redirect: '/componentDisplay/listLayout',
    children: [
      {
        path: 'listLayout',
        name: 'ListLayout',
        component: () => import('@/views/listLayout/index.vue'),
        meta: {
          title: '列表布局组件'
        }
      },
      {
        path: 'ListLayoutDetail/:id',
        name: 'ListLayoutDetail',
        hidden: true,
        component: () => import('@/views/listLayout/detail.vue'),
        meta: {
          title: '详情',
          parentName: 'ListLayout'
        }
      },
      {
        path: 'listLayouAdd',
        name: 'listLayouAdd',
        hidden: true,
        component: () => import('@/views/listLayout/add.vue'),
        meta: {
          title: '新增',
          parentName: 'ListLayout'
        }
      },
      {
        path: 'searchFormDemoList',
        name: 'SearchFormDemoList',
        component: () => import('@/views/searchFormDemo/index.vue'),
        meta: {
          title: '动态表单示例',
          icon: 'el-icon-document',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/dragInsert',
    name: 'dragInsert',
    component: Layout,
    meta: {
      title: '原生操作',
      icon: 'el-icon-document'
    },

    children: [
      {
        path: 'dragInsertList',
        name: 'DragInsertList',
        component: () => import('@/views/dragInsert/index.vue'),
        meta: {
          title: '拖拽插入'
        }
      },
      {
        path: 'dragInsertList2',
        name: 'DragInsertList2',
        component: () => import('@/views/dragInsert/sortjsdemo.vue'),
        meta: {
          title: 'sort.js'
        }
      }
    ]
  }
]
