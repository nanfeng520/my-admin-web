<!--
 * @Author: zuozy
 * @Date: 2022-04-25 16:33:25
 * @Description:开始项目的容器，容器内左侧菜单，头部菜单都在此处设置
-->
<template>
  <div class="app-container" >
    <el-button @click="handleLogin('admin')">管理员</el-button>
    <el-button @click="handleLogin('user')">小杂毛</el-button>
  </div>
</template>

<script>

export default {
  name: 'MyRoot',
  components: { },
  methods: {
    handleLogin(token) {
      // this.$store.commit('SET_TOKEN', token)
      localStorage.setItem('token', token)
      this.$store.dispatch('SET_MENU_LIST')
    }
  }

}
</script>

<style scoped lang='scss'>
</style>
