import Vuex from 'vuex'
import Vue from 'vue'
import router from '@/router'
import home from '@/router/home'
import listLayout from '@/router/listLayout'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tagsView: [], // 标签页
    menuActive: {}, // 当前存在的页面 取name
    cacheViews: [], // 缓存标签页
    menuList: [], // 左侧菜单列表
    token: '' // 模拟菜单权限，目前有admin 和user
  },
  getters: {},
  mutations: {
    SET_MENU_LIST(state, menuList) {
      state.menuList = menuList
    },
    SET_TOKEN(state, token) {
      state.token = token
    },
    ADD_TAGSVIEW(state, value) {
      state.tagsView.push(value)
    },
    ADD_CACHE_VIEW(state, value) {
      state.cacheViews.push(value)
    },
    SET_MENU_ACTIVE(state, value) {
      state.menuActive = value
    }
  },
  actions: {
    // 设置动态路由
    SET_MENU_LIST({ commit }) {
      const token = localStorage.getItem('token') || ''
      const menuToken = {
        admin: home,
        user: listLayout
      }

      const menuList = menuToken[token] || []
      commit('SET_MENU_LIST', menuList)
      menuList.forEach(ele => {
        router.addRoute(ele)
      })
      router.push({
        path: menuList[0] && menuList[0].path
      })
    },
    // 新增页签操作
    ADD_TAGSVIEW_OPERATION({ dispatch }, context) {
      dispatch('ADD_TAGS_VIEW', context) // 新增页签
      dispatch('ADD_CACHE_VIEW', context) // 新增页签缓存
    },
    ADD_TAGS_VIEW({ state, commit }, context) {
      const isFlag = state.tagsView.some((item) => item.fullPath === context.fullPath)
      if (!isFlag) { // 数组内没找到就添加
        commit('ADD_TAGSVIEW', context)
      }
    },
    ADD_CACHE_VIEW({ state, commit }, context) {
      const isExistence = state.cacheViews.includes(context.name)
      // 需要缓存，并且在缓存数组里面没找到自身
      if (!context.meta.noCache && !isExistence) {
        setTimeout(() => {
          commit('ADD_CACHE_VIEW', context.name)
        }, 800)
      }
    }
  }
})
