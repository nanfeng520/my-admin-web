export default [
  {
    path: '/',
    redirect: {
      name: 'login'
    },
    hidden: true
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '*',
    name: 'not404',
    hidden: true,
    component: () => import('@/views/login/not404.vue')
  }
]
