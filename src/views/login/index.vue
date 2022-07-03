<!--
 * @Author: zuozy
 * @Date: 2022-04-25 16:33:25
 * @Description:开始项目的容器，容器内左侧菜单，头部菜单都在此处设置
-->
<template>
  <div class="app-container" @click="handleLogin">
    login
  </div>
</template>

<script>

export default {
  name: 'MyRoot',
  components: { },
  methods: {
    handleLogin() {
      this.$router.push({
        path: '/home/homePage'
      })
    }
  }

}
</script>

<style scoped lang='scss'>
</style>
