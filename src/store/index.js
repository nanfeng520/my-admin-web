import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tagsView: [], // 标签页
    menuActive: '', // 当前存在的页面 取name
    cacheViews: [] // 缓存标签页
  },
  getters: {},
  mutations: {
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
    // 新增页签操作
    ADD_TAGSVIEW_OPERATION({ dispatch }, context) {
      dispatch('ADD_TAGS_VIEW', context) // 新增页签
      dispatch('ADD_CACHE_VIEW', context) // 新增页签缓存
    },
    ADD_TAGS_VIEW({ state, commit }, context) {
      const isFlag = state.tagsView.some((item) => item.name === context.name)
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
