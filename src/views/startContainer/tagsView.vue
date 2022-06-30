<template>
  <div class="tags-view">
    <router-link
      v-for="(item,i) in tagsView"
      ref="tag"
      :key="i"
      :class="{active:item.fullPath === menuActive.fullPath}"
      :to="item.path"
    >{{ item.meta.title }}</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TagsView',
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['menuActive']),
    tagsView() {
      return this.$store.state.tagsView
    }
  },
  watch: {
    $route() {
      setTimeout(() => {
        this.moveScroll()
      }, 100)
    }
  },

  methods: {
    moveScroll() {
      const tags = this.$refs.tag
      for (let i = 0; i < tags.length; i++) {
        const to = tags[i].to
        if (to === this.$route.name) {
          tags[i].$el.scrollIntoView({ behavior: 'smooth', inline: 'center' })
        }
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.tags-view {
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  overflow-x: auto;
  min-height: 31px;
  height: 31px;
  background: white;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
  a {
    display: block;
    padding: 6px 40px;
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
