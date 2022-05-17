<template>
  <el-table :data="data" border height="100%">
    <el-table-column
      v-for="(item) in headerlist"
      :key="item.key"
      :prop="item.key"
      :label="item.label"
    >
      <template v-if="item.custom">
        <slot :name="item.key"/>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'TrTable',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    headerlist: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>
