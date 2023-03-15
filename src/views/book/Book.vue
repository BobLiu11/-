<template>
  <div class="card">
    <div class="header">
      <span>{{ '序号：' }}</span>
      <el-input class="header_input" v-model="input" placeholder="请输入序号" />
      <el-button type="primary">查找</el-button>
      <el-button type="success" @click="handAdd('新增')">新增</el-button>
    </div>
    <el-table class="table_style" :data="tableData">
      <el-table-column prop="id" label="序号" width="60" align="center" />
      <el-table-column prop="bookname" label="书名" align="center" />
      <el-table-column prop="author" label="作者" align="center" />
      <el-table-column prop="publisher" label="出版社" align="center" />
      <el-table-column fixed="right" label="操作" width="100" align="center">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handleUpdateEvent(scope.row)">修改</el-button>
          <el-button link type="primary" @click="handleDeleteEvent(scope.row)" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogFormVisible" title="Shipping address">
      <el-form :model="form">
        <el-form-item label="Promotion name">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Zones">
          <el-select v-model="form.region" placeholder="Please select a zone">
            <el-option label="Zone No.1" value="shanghai" />
            <el-option label="Zone No.2" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import router from '../../router';
import { useStore } from '../../store'
import { getBookList, deleteBook, updateBook } from '@/api/book'
const input = ref('')
const dialogFormVisible = ref(false)
const tableData: any = ref([])
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
getBookList().then((res) => {
  tableData.value = res.data
})
const handleDeleteEvent: any = (row: any) => {
  deleteBook(row.id).then(res => {
    if (+res.code == 200) {
      getBookList()
    }
  })
}
const handAdd = (type: String) => {
  if (type == '新增') {

  }
  dialogFormVisible.value = true
}
const handleUpdateEvent = (row: any) => {
  // updateBook(row.id).then(res => {
  //   // if (+res.code == 200) {
  //   //   getBookList()
  //   // }
  // })
  console.log(row)
}
const gotoDag = function () {
  router.push({ path: '/test' })
}
</script>

<style scoped lang="less">
.header {
  display: flex;
  align-items: center;
  margin: 1rem;
  padding: 0.5rem;
  background-color: #fff;
  height: 4rem;

  .header_input {
    width: 15rem;
    padding: 0 1rem;
    padding-left: 0;
  }
}

.table_style {
  margin: 1rem;
  width: 98%
}
</style>
  