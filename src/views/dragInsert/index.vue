<template>
  <div class="drag-insert">
    <div style="display:flex">
      <div class="list-drag-insert-demo">
      <h4>列表间拖拽插入</h4>
      <div>listOne {{list.length}}</div>
      <div>listTwo {{list2.length}}</div>
      <div class="list-drag-insert">
        <ul id="demo1">
          <li
            v-for="item in list"
            :key="item.id"
          >{{item.name}}</li>
        </ul>
        <ul id="demo2">
          <li
            v-for="item in list2"
            :key="item.id"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div class="list-drag-insert-demo">
      <h4>列表内移形换位</h4>
      <div class="list-drag-insert">
        <ul id="demo3">
          <li
            v-for="item in list3"
            :key="item.id"
          >{{item.name}}</li>
        </ul>
        <ul id="demo4">
          <li
            v-for="item in list3"
            :key="item.id"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>
    </div>
   
  </div>
</template>

<script>
import Sortable from 'sortablejs'
export default {
  name: "Draginsert",
  data () {
    return {
      list: [
        { name: "aim", id: '11' },
        { name: "age", id: 22 },
        { name: "heihei", id: 33 },
        { name: 'hello', id: 44 }
      ],
      list2: [
        { name: "艾米", id: '55' },
        { name: "年龄", id: 66 },
        { name: "嘿嘿", id: 77 },
        { name: '你好', id: 88 }
      ],
      list3: [
        { name: "艾米", id: '55' },
        { name: "年龄", id: 66 },
        { name: "嘿嘿", id: 77 },
        { name: '你好', id: 88 }
      ]
    }
  },
  mounted () {
    this.initSortable()
  },
  methods: {
    initSortable () {
      this.sortableDemo1()
      this.sortableDemo2()
    },
    // demo1 列表之间的换位置
    sortableDemo1 () {
      let dv1 = document.getElementById('demo1')
      let dv2 = document.getElementById('demo2')

      new Sortable(dv1, {
        group: 'dragInsert',
        animation: 150,
        onEnd: ({ oldIndex, newIndex }) => {
          console.log(oldIndex, newIndex);
          let items = this.list.splice(oldIndex, 1)[0]
          this.list2.splice(newIndex, 0, items)
        }
      });

      new Sortable(dv2, {
        group: 'dragInsert',
        animation: 150,
        onEnd: ({ oldIndex, newIndex }) => {
          let items = this.list2.splice(oldIndex, 1)[0]
          this.list.splice(newIndex, 0, items)
        }
      })
    },
    // demo2 列表之内的换位置
    sortableDemo2 () {
      let dv3 = document.getElementById('demo3')
      new Sortable(dv3, {
        animation: 150,
        onEnd: ({ oldIndex, newIndex }) => {
          let items = this.list3.splice(oldIndex, 1)[0]
          this.list3.splice(newIndex, 0, items)
        }
      });
    }
  }
}
</script>

<style scoped lang='scss'>
.drag-insert {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: white;
  .list-drag-insert-demo {
    border: 1px solid red;
    padding: 10px;
    // display: flex;
    margin-right: 10px;
    .list-drag-insert {
      display: flex;
      ul > li {
        margin: 10px;
      }
    }
  }
}
</style>