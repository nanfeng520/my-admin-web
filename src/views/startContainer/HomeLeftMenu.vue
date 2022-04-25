<template>
  <el-row class="nav-menu">
    <el-col :span="24">
      <el-menu
        :default-active="menuActive"
        class="el-menu-vertical-demo"
      >
        <el-menu-item 
            :index="item.name" 
            v-for="(item) in routeList" 
            :key="item.name"
            @click="handleMenuItem(item)">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
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
      routeList:routeList.options.routes[0].children,
    }
  },
  watch:{
    '$route'(val){
      this.$store.commit('SET_MENU_ACTIVE',val.name) // 每次路由变化存储路由name(active)
    }
  },
  computed:{
    ...mapState(['menuActive'])
  },
  created(){
    this.$store.commit('SET_MENU_ACTIVE',this.$route.name)  // 存储当前的路由name
    this.$store.dispatch('ADD_TAGSVIEW_OPERATION',this.$route) // 刷新取当前路由存储
  },
  methods: {
    handleMenuItem(item){
      if(item.name === this.$route.name) return
      this.$store.dispatch('ADD_TAGSVIEW_OPERATION',item)
      this.$router.push({
        name:item.name
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

