<template>
  <div>

    <!-- <div>{{list}}</div>
    <div>{{list2}}</div> -->
    <div class="ksby">
      <ul id="demo1">
        <li
          v-for="item in list"
          :key="item.id"
        
        >{{item.name}} {{item.children.length}}
          
        </li>
      </ul>
      <ul id="demo2">
        <li
          v-for="item in list2"
          :key="item.id"
          
        >{{item.name}}--{{item.children.length}}
           <ul v-if="item.children.length">
              <li v-for="t1 in item.children" :key="t1.id">子{{t1.name}}</li>
           </ul>
        </li>
      </ul>
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
        { name: "aim", id: '11',children:[] },
        { name: "age", id: 22 ,children:[]},
        { name: "heihei", id: 33,children:[] },
        { name: 'hello', id: 44,children:[] }
      ],
      list2: [
        { name: "艾米", id: '55',children:[] },
        { name: "年龄", id: 66 ,children:[]},
        { name: "嘿嘿", id: 77 ,children:[]},
        { name: '你好', id: 88 ,children:[]}
      ]
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      let dv1 = document.getElementById('demo1')
      let dv2 = document.getElementById('demo2')
      let self = this
       new Sortable(dv1, {
        // group: 'dragInsert',
        animation: 150,
        sort:true,
        // onSort: (evt)=> {
        //    let some = sortable1.toArray()
        //   console.log('sortable1',some);
        //    console.log('sortable1',this.list);
        // }
        onEnd:({oldIndex,newIndex})=> {
          console.log(oldIndex,newIndex);
          
          let items = this.list.splice(oldIndex,1)[0]
          // this.list2.splice(newIndex,0,items)
          
          
           this.list2[newIndex].children.push(items)
           console.log(this.list2);
          //  console.log(self.list2);
          // (this.list2[newIndex].children || this.list2[newIndex].children = []).push(1)
        
        }
      });
      
       new Sortable(dv2, {
        // group: 'dragInsert',
        animation: 150,
        sort:true,
        onEnd:({oldIndex,newIndex})=> {
          let items = this.list2.splice(oldIndex,1)[0]
          // this.list2.splice(newIndex,0,items)
          
          
           this.list[newIndex].children.push(items)
          //  console.log(this.list2);
          // console.log(oldIndex,newIndex);
          // let items = this.list2.splice(oldIndex,1)[0]
          // this.list.splice(newIndex,0,items)
        
        }
      })
     
    }
  }
}
</script>

<style scoped lang='scss'>
.ksby {
  display: flex;
  ul > li {

    margin: 10px;
  }
}
</style>