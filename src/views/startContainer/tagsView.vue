<template>
  <div class="tags-view">
    <router-link
      v-for="(item,i) in tagsView"
      :key="i"
      ref="tag"
      :class="{active:item.name === menuActive}"
      :to='item.name'
    >{{item.meta.title}}</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "tagsView",
  data () {
    return {

    }
  },
  watch:{
    $route(){
       setTimeout(()=>{
         this.moveScroll()
       },100)
    }
  },
  computed: {
    ...mapState(['menuActive']),
    tagsView () {
      return this.$store.state.tagsView
    }
  },
  methods:{
    moveScroll(){
      let tags =  this.$refs.tag
        for (let i = 0; i < tags.length; i++) {
           let to = tags[i].to
          if(to === this.$route.name) {
                tags[i].$el.scrollIntoView({behavior: 'smooth',inline:'center'})
            }
        }
    }
  }
}
</script>
<style lang='scss' scoped>
.tags-view {
  //  border-bottom: 1px solid pink;
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  // height: 50px;
  // overflow-y: hidden;
  overflow-x: auto;
  min-height: 31px;
  height: 31px;
  background: white;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
  // > li {
  // min-width: 100px;
  // margin-right: 10px;
  // text-align: center;
  // background: #f1f3f5;
  // border: 1px solid #f3f5f8;
  a {
    display: block;
    // width: 200px;
    padding: 6px 40px;
    // box-sizing: border-box;
    color: rgba(0, 0, 0, 0.65);
    &.active {
      background: #f3f5f8;
      border-radius: 6px 6px 0 0;
      color: #4385ff;
    }
  }
  &.active {
    background: #f3f5f8;
    border-radius: 6px 6px 0 0;
    a {
      color: #4385ff;
    }
  }
}
</style>