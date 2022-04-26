<template>
  <div class="search-form-demo">
    <zuo-searchFrom :fields='fieldsList' @getFormData='getFormData'>
      <template #operateSlot>
        <el-button size='mini'>导出</el-button>
      </template>
    </zuo-searchFrom>
  </div>
</template>

<script>
export default {
  name: "SearchFormDemo",
  computed: {
    fieldsList () {
      let mockList = [
        { label: "输入姓名", type: 'input', key: 'name', placeholder: '请输入' },
        { label: "输入姓名", type: 'input', key: 'name2', placeholder: '请输入' },
        { label: "输入姓名", type: 'input', key: 'name3', placeholder: '请输入' },
        { label: "输入姓名", type: 'input', key: 'name4', placeholder: '请输入' },
        { label: "输入姓名", type: 'input', key: 'name5', placeholder: '请输入' },
      ]
      return {
        searchList: mockList,
        selectList: [1]
      }
    }
  },
  methods:{
    getFormData(form){
      console.log(form);
    }
  }
}
</script>

<style scoped lang='scss'>
.search-form-demo {
  height: 100%;
  background: white;
}
</style>