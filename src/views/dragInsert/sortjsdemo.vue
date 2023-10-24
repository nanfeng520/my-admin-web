<template>
  <div>
    <div v-for="item in version" :id="`version_${item.id}`" :key="item.name" class="version">{{ item.name }}
      <div v-for="vo in item.data" :key="vo.name" class="vo" style="margin-left: 10px;">
        {{ vo.name }}</div>
    </div>

    <div>-----------------</div>
    <div>
      <div>
        <div id="heihei">eee</div>
      </div>
    </div>
  </div>
</template>

<script>

import Sortable from 'sortablejs'
export default {
  name: 'List',
  components: {},
  data() {
    return {
      version: [
        { name: '版本1', id: 1, data: [{ name: '左迭代01' }] },
        { name: '版本2', id: 2, data: [{ name: '右迭代01' }] }
      ]
    }
  },
  mounted() {
    this.hehe()
  },
  methods: {
    hehe() {
      const v11 = document.getElementById('heihei')
      new Sortable(v11, {
        group: {
          name: 'shared',
          // pull: 'clone', // 拖拽不复制自身
          put: true // 不允许拖拽进这个列表
        },
        animation: 150,
        sort: true // 设为false，禁止sort
      })
      // const vdom = document.getElementById('version')
      this.version.forEach(element => {
        const vdom = document.getElementById(`version_${element.id}`)
        console.log(vdom)
        new Sortable(vdom, {
          group: {
            name: 'shared',
            // pull: 'clone', // 拖拽不复制自身
            put: true //  不允许拖拽进这个列表 ? false:true
          },
          animation: 150,
          sort: true // 设为false，禁止sort
        })
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.version {

  .vo{
    height: 30px;
    line-height: 30px;
    background: #e6ecf8;
    margin-bottom: 10px;
  }
}
</style>
