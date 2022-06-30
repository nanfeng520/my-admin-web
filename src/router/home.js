import Layout from '@/views/startContainer/root.vue'
export default [
  {
    path: '/',
    name: 'home',
    component: Layout,
    meta: {
      title: '首页',
      icon: 'el-icon-menu',
      menuTypeByItem: true // 菜单类型为item, 一级菜单不展开，点击直接跳转路由 (路由会取children的第一项)
    },
    redirect: '/homePage',
    children: [
      {
        path: 'homePage',
        name: 'homePage',
        component: () => import('@/views/homePages/index.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: 'homePage11',
        name: 'homePage11',
        component: () => import('@/views/homePages/index.vue'),
        meta: {
          title: '首页11'
        }
      }
    ]
  }
]
