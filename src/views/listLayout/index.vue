<template>

  <zuo-container>
    <template #zuoHeader>
      <div>
        标题文字
      </div>
    </template>
    <template #zuoContent>
      <zuo-tr-table :data="tableData" :headerlist="headerlist">
        <template #options>
          <el-button type="text">查看</el-button>
          <el-button type="text">编辑</el-button>
          <el-button type="text">详情</el-button>
        </template>
        <template #tag>
          <el-tag>标签一</el-tag>
        </template>
      </zuo-tr-table>
    </template>
    <template #zuoFooter>
      <el-pagination
        :current-page="currentPage4"
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
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
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
    goDetail(id) {
      this.$router.push({
        name: 'ListLayoutDetail',
        params: {
          id: id
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
