<template>
  <el-table :data="data" border height="100%">
    <template v-for="(item) in headerlist">
      <el-table-column
        v-if="!item.custom"
        :key="item.key"
        :label="item.label"
        :prop="item.key"
      />
      <el-table-column
        v-else
        :key="item.key"
        :label="item.label">
        <div slot-scope="scope">
          <slot :name="item.key" :row="scope.row" />
        </div>
      </el-table-column>
    </template>
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
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
</style>
