<!-- 每用到，逻辑都在startContainer/root.vue里。后面转移 -->
<template>
  <div class="app-layout">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cacheViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LayoutIndex',
  computed: {
    ...mapState(['cacheViews']),
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-layout {
  height: 100%;
}
</style>
