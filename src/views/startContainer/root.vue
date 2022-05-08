<!--
 * @Author: zuozy
 * @Date: 2022-04-25 16:33:25
 * @Description:开始项目的容器，容器内左侧菜单，头部菜单都在此处设置
-->
<template>
  <div class="app-container">
    <div class="nav-menu">
      <!-- 左侧菜单 -->
      <HomeLeftMenu />
    </div>
    <div class="container">
      <div class="container-user-info" />
      <!-- 头部页签 -->
      <tagsView />
      <div class="container-content">
        <app-layout />
      </div>
    </div>
  </div>
</template>

<script>
import AppLayout from '@/layout/index'
import HomeLeftMenu from './HomeLeftMenu'
import tagsView from './tagsView.vue'
import { mapState } from 'vuex'
export default {
  name: 'MyRoot',
  components: { HomeLeftMenu, tagsView, AppLayout },
  computed: {
    ...mapState(['cacheViews']),
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped lang='scss'>
.app-container {
  display: flex;
  height: 100vh;
  width: 100%;
  .nav-menu {
    width: 200px;
  }
  .container {
    flex: 1;
    background: #f3f5f8;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    box-sizing: border-box;
    .container-user-info {
      min-height: 50px;
      background: white;
    }
    .container-content {
      padding: 0px 8px 0px 8px;
      box-sizing: border-box;
      height: 100%;
      overflow: hidden;
    }
  }
}
</style>
