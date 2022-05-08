<template>
  <div class="search-form-demo">
    <zuo-searchFrom
      :fields="fieldsList"
      :init-value="initValue"
      @getFormData="getFormData">
      <template #operateSlot>
        <el-button size="mini">导出</el-button>
      </template>
      <template #name5>
        <div>  插槽内容 </div>
      </template>
    </zuo-searchFrom>
  </div>
</template>

<script>
export default {
  name: 'SearchFormDemo',
  data() {
    return {
      initValue: {
        name: 123,
        name2: 'sm1'
      }
    }
  },
  computed: {
    fieldsList() {
      const mockList = [
        { label: '输入姓名', type: 'input', key: 'name', placeholder: '请输入' },
        { label: '选择性别', type: 'select', key: 'name2', placeholder: '请选择性别' },
        { label: '输入姓名', type: 'input', key: 'name3', placeholder: '请输入' },
        { label: '输入姓名', type: 'input', key: 'name4', placeholder: '请输入' },
        { label: '插槽哦', type: 'slot', key: 'name5', placeholder: '请输入' }
      ]
      return {
        searchList: mockList,
        selectList: {
          name2: [
            { label: '提交1', value: 'sm1' },
            { label: '提交2', value: 2 },
            { label: '提交3', value: 3 }
          ]
        }
      }
    }
  },
  methods: {
    getFormData(form) {
      console.log(form)
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
