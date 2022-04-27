<!--
  动态表单组件
-->
<template>
  <ul class="search-form">
    <li
      v-for="item in searchList"
      :key="item.key"
      :class="{'is-focus':isFocus && item.key === currentKey}"
    >
      <div class="search-left">
        <div class="label">{{ item.label }}:{{ item.isFocus }}</div>
      </div>
      <el-input
        v-if="item.type === 'input'"
        v-model="searchForm[item.key]"
        :placeholder="item.placeholder"
        class="search-right"
        @focus="focusEvent(item.key)"
        @blur="blurEvent"
      />

      <el-select
        v-if="item.type === 'select'"
        v-model="searchForm[item.key]"
        :placeholder="item.placeholder"
        class="search-right"
      >
        <el-option
          v-for="item in item.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"/>
      </el-select>

    </li>

    <div>
      <el-button type="primary" size="mini" @click="onSubmit">提交</el-button>
      <el-button size="mini" @click="onReset">重置</el-button>
      <slot name="operateSlot"/>
    </div>
  </ul>
</template>

<script>
export default {
  name: 'SearchFrom',
  props: {
    fields: {
      type: Object,
      default: () => ({
        searchList: [], // form 表单
        selectList: {} // 动态数据存放，主要存放form 里面key的值
      })

    },
    initValue: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      searchForm: {},
      isFocus: false, // 激活
      currentKey: '' // 当前点击 form item 的key
    }
  },
  computed: {
    searchList() {
      const optionsList = ['select']
      const searchList = JSON.parse(JSON.stringify(this.fields.searchList))
      searchList.forEach(item => {
        if (optionsList.includes(item.type)) {
          item.options = this.fields.selectList[item.key]
        }
      })
      return searchList
    }
  },
  watch: {
    initValue: {
      handler(val) {
        for (const key in val) {
          this.$set(this.searchForm, key, val[key])
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    onSubmit() {
      this.$emit('getFormData', this.searchForm)
    },
    onReset() {
      this.searchForm = {}
    },
    focusEvent(key) {
      this.isFocus = true
      this.currentKey = key
    },
    blurEvent() {
      this.isFocus = false
      this.currentKey = ''
    }
  }
}
</script>

<style scoped lang='scss'>
.search-form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: auto;
  padding: 10px;
   > li {
     border: 1px solid rgba(0,0,0,.15);
     border-radius: 3px;
     display: flex;
     align-items: center;
     width: 220px;
     height: 24px;
     padding: 0 0 0 10px;
     margin:0 8px 8px 0;

     .search-left {
       flex-shrink: 0;
    }
  .search-right {
      flex: 1;
  }
   }
   .is-focus {
     border-color: #4385ff;
     box-shadow: 0 0 2px 0 #4380f7;
   }

}
</style>
