<template>
  <div class="zuo-container">
    <div class="zuo-header">
       <slot name='zuoHeader'></slot>
    </div>
    <div class="zuo-content">
      <slot name='zuoContent'></slot>
    </div>
    <div class="zuo-footer" v-if="$slots.zuoFooter">
       <slot name='zuoFooter'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZuozyContainer",
  data() {
    return {
      
    }
  },
  created(){
    console.log(111,this.$slots);
  }
}
</script>

<style scoped lang='scss'>
.zuo-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .zuo-header {
    box-sizing: border-box;
    padding: 10px;
    background: white;
    margin-bottom: 8px;
  }
  .zuo-content {
    flex: 1;
    background: #fff;
    margin-bottom: 8px;
    width: 100%;
    overflow-y: auto;
    // .table {
    //   flex: 1;
    //   width: 100%;
    // }
  }
  .zuo-footer {
    padding: 10px;
    box-sizing: border-box;
    background: white;
    display: flex;
    justify-content: flex-end;
  }
}
</style>