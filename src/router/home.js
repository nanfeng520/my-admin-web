import Layout from '@/views/startContainer/root.vue'
export default [
  {
    path: '/',
    name: 'home',
    component: Layout,
    meta: {
      title: '首页',
      icon: 'el-icon-menu',
      firstChild: true
    },
    redirect: '/homePage',
    children: [
      {
        path: 'homePage',
        name: 'homePage',
        component: () => import('@/views/homePages/index.vue'),
        meta: {
          title: '首页',
          level: 1
        }
      }
    ]
  }
]
