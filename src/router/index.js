import Vue from 'vue'
import Router from 'vue-router'
import MyHome from '@/views/myHome/index.vue'
import myAbout from '@/views/about/index.vue'
import myQwzs from '@/views/qwzs/index.vue'
import myRoot from '@/views/myHome/root.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'MyRoot',
    component: myRoot,
    redirect: '/MyHome',
    children: [
      {
        path: 'myHome',
        name: 'MyHome',
        component: MyHome,
        meta: {
          title: "闲来垂钓碧溪上",
          icon:"el-icon-menu",
        }
      },
      {
        path: 'myQwzs',
        name: 'MyQwzs',
        component: myQwzs,
        meta: {
          title: "忽复乘舟梦日边",
          icon:"el-icon-document",
        }
      },
      {
        path: 'myAbout',
        name: 'MyAbout',
        component: myAbout,
        meta: {
          title: "夜阑卧听风吹雨",
          icon:"el-icon-setting",
        }
      },
      {
        path: 'aa',
        name: 'aa',
        component: myAbout,
        meta: {
          title: "乘风破浪会有时",
          icon:"el-icon-setting",
        }
      },
      {
        path: 'bb',
        name: 'bb',
        component: myAbout,
        meta: {
          title: "直挂云帆济沧海",
          icon:"el-icon-setting",
        }
      },
      {
        path: 'cc',
        name: 'cc',
        component: myAbout,
        meta: {
          title: "铁马冰河入梦来",
          icon:"el-icon-setting",
        }
      },
      {
        path: 'dd',
        name: 'dd',
        component: myAbout,
        meta: {
          title: "单于夜遁逃",
          icon:"el-icon-setting",
        }
      },
      {
        path: 'ff',
        name: 'ff',
        component: myAbout,
        meta: {
          title: "孤帆远影碧空尽",
          icon:"el-icon-setting",
        }
      },
      {
        path: 'kk',
        name: 'kk',
        component: myAbout,
        meta: {
          title: "张三李四王二麻",
          icon:"el-icon-setting",
        }
      },
      {
        path: 'll',
        name: 'll',
        component: myAbout,
        meta: {
          title: "企业微信团队",
          icon:"el-icon-setting",
        }
      }
    ]
  }]
})
