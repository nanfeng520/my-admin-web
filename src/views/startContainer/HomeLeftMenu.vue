<template>
  <el-row class="nav-menu">
    <el-col :span="24">
      <el-menu
        :default-active="actives"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
      >
        <div v-for="item in routeList" :key="item.name">
          <!-- 判断有children 并且不需要展开操作，体现在children只有一个子级可以设置
          meta下面的firstChild 为true,就会以子级作为一级菜单 -->
          <el-submenu v-if="item.children && !item.meta.firstChild" :index="item.name">
            <template slot="title">
              <i class="el-icon-location"/>
              <span>{{ item.meta.title }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="menu in item.children"
                :key="menu.name"
                :index="menu.name"
                @click="handleMenuItem(menu)"
              >{{ menu.meta.title }} </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item
            v-else
            :index="item.children[0].name"
            @click="handleMenuItem(item)"
          >{{ item.meta.title }} </el-menu-item>
        </div>

      </el-menu>
    </el-col>
  </el-row>

</template>

<script>
import routeList from '@/router'
import { mapState } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['menuActive']),
    actives() {
      return this.menuActive.name
    },
    routeList() {
      const routes = routeList.options.routes
      this.hideFilter(routes)
      return this.hideFilter(routes)
    }
  },
  watch: {
    '$route'(route) {
      this.$store.commit('SET_MENU_ACTIVE', route) // 每次路由变化存储路由name
      this.$store.dispatch('ADD_TAGSVIEW_OPERATION', route)
    }
  },

  created() {
    this.$store.commit('SET_MENU_ACTIVE', this.$route) // 存储当前的路由name
    this.$store.dispatch('ADD_TAGSVIEW_OPERATION', this.$route) // 刷新取当前路由存储
  },
  methods: {
    hideFilter(routes) {
      let timer = []
      timer = routes.filter(item => {
        if (item.children) {
          item.children = this.hideFilter(item.children)
        }
        return !item.hidden
      })
      return timer
    },
    handleMenuItem(item) {
      let routeItem = item
      // 申明routeItem 主要判断一级菜单不展开的情况，这个时候的item应该属于他children里面的唯一一个子级
      if (item.meta.firstChild) {
        routeItem = item.children[0]
      }
      console.log(111, item)
      this.$router.push({
        name: routeItem.name
      })
    }

  }
}
</script>
<style lang='scss' scoped>
.nav-menu {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .el-col {
    height: 100%;
  }
  .el-menu {
    height: 100%;
    border: none;
    .el-menu-item.is-active {
    background: #ecf5ff;
  }
  .el-menu-item, .el-submenu__title {
    height: 50px;
    line-height: 50px;
  }
  }
}
</style>

