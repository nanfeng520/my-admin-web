<template>
  <div class="app-container">
    <div class="nav-menu">
      <HomeLeftMenu></HomeLeftMenu>
    </div>
    <div class="container">
      <div class="container-user-info"></div>
      <tagsView></tagsView>
      <div class="container-content">
        <transition
          name="fade-transform"
          mode="out-in"
        >
          <keep-alive :include="cacheViews">
            <router-view :key="key"></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import HomeLeftMenu from './HomeLeftMenu'
import tagsView from './tagsView.vue'
import { mapState } from 'vuex'
export default {
  name: "MyRoot",
  components: { HomeLeftMenu, tagsView },
  computed: {
    ...mapState(['cacheViews']),
    key () {
      return this.$route.path
    },
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
    // padding: 0 10px;
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

