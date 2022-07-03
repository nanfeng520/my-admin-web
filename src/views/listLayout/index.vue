<template>
  <zuo-container>
    <template #zuoHeader>
      <div>
        标题文字
      </div>
    </template>
    <template #zuoContent>
      <zuo-tr-table
        :data="tableData"
        :headerlist="headerlist"
      >
        <template v-slot:options="scope">
          <el-button type="text" @click="goDetail(scope.row,true)" >查看</el-button>
          <el-button type="text">编辑</el-button>
          <el-button type="text" @click="goDetail(scope.row)">详情</el-button>
        </template>
        <template v-slot:tag="scope">
          <el-tag>{{ scope.row.id || '标签1' }}</el-tag>
        </template>
      </zuo-tr-table>
    </template>
    <template #zuoFooter>
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        :total="400"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />

    </template>
  </zuo-container>
</template>

<script>
export default {
  name: 'ListLayout',
  data() {
    return {
      currentPage: 1,
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      headerlist: [ // table 的头部参数
        { label: '姓名', key: 'name' },
        { label: '日期', key: 'date' },
        { label: '地址', key: 'address' },
        { label: '标签', key: 'tag', custom: true },
        { label: '操作', key: 'options', custom: true }
      ]

    }
  },
  methods: {
    goDetail(item, flag) {
      this.$router.push({
        name: flag ? 'listLayouAdd' : 'ListLayoutDetail',
        params: {
          id: item.date
        }
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped lang='scss'>
.my-home {
  height: 100%;
  // background: white;
}
</style>
