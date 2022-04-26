<!-- 
  动态表单组件
-->
<template>
    <ul class="search-form">
      <li
        v-for="item in fields.searchList"
        :key="item.key"
        :class="{'is-focus':isFocus && item.key === currentKey}"
      >
        <div class="search-left">
          <div class="label">{{item.label}}:{{item.isFocus}}</div>
        </div>
        <el-input
          v-if="item.type === 'input'"
          class="search-right"
          v-model="searchForm[item.key]"
          placeholder="请输入内容"
          @focus='focusEvent(item.key)'
          @blur='blurEvent'
        ></el-input>
        <!-- <div v-if="item.type === 'select'"></div>
         <div v-if="item.type === 'daterangePicker'"></div> -->
      </li>
      <div>
        <el-button type="primary" size='mini' @click="onSubmit">提交</el-button>
        <el-button size='mini' @click="onReset">重置</el-button>
        <slot name='operateSlot'></slot>
      </div>
    </ul>
</template>

<script>
export default {
  name: "searchFrom",
  props: {
    fields: {
      type: Object,
      default: () => {
        searchList = [] // form 表单
        selectList = {} // 动态数据存放，主要存放form 里面key的值
      }
    }
  },
  data () {
    return {
      searchForm: {}, 
      isFocus:false, // 激活
      currentKey:'' // 当前点击 form item 的key
    }
  },
  methods:{
    onSubmit(){
      this.$emit('getFormData',this.searchForm)
    },
    onReset(){
      this.searchForm = {}
    },
    focusEvent(key){
      this.isFocus = true
      this.currentKey = key
    },
    blurEvent(){
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