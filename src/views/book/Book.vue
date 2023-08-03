<template>
  <div class="card">
    <div class="header">
      <span>{{ "条件：" }}</span>
      <el-input
        class="header_input"
        v-model="input"
        placeholder="请输入书名、作者或出版社"
        clearable
      />
      <el-button type="primary" @click="handleFind(input)">查找</el-button>
      <el-button type="success" @click="handleDialog('新增')">新增</el-button>
    </div>
    <el-table class="table_style" :data="tableData">
      <el-table-column type="index" width="150" label="序号" />
      <el-table-column prop="bookname" label="书名" align="center" />
      <el-table-column prop="author" label="作者" align="center" />
      <el-table-column prop="publisher" label="出版社" align="center" />
      <el-table-column fixed="right" label="操作" width="100" align="center">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="handleDialog('修改', scope.row)"
            >修改</el-button
          >
          <el-button
            link
            type="primary"
            @click="handleDeleteEvent(scope.row)"
            size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogFormVisible" :title="title" >
      <el-form :model="form" label-width="5rem">
        <el-form-item label="书名">
          <el-input v-model="form.bookname" autocomplete="off" />
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="form.author" autocomplete="off" />
        </el-form-item>
        <el-form-item label="出版社">
          <el-input v-model="form.publisher" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="handleSubmit(form)">
            提交
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import { getBookList, deleteBook, updateBook, addBook } from "@/api/book";
const input = ref("");
const dialogFormVisible = ref(false);
const tableData = ref([]);
const form = reactive({
  bookname: "",
  author: "",
  publisher: "",
});
const title = ref("");
onMounted(() => {
  handleGetBookList();
});
const handleFind = (value: any) => {
  handleGetBookList(value);
};
const handleGetBookList = (value?: any) => {
  getBookList(value).then((res) => {
    if (res.code === 200) {
      tableData.value = res.data;
    }
  });
};
const handleDeleteEvent = (row: any) => {
  deleteBook(row._id).then(async (res) => {
    if (+res.code === 200) {
      ElMessage({
        message: res.message,
        type: "success",
      });
      await handleGetBookList();
    }
  });
};
const handleDialog = (type: any, row?: any) => {
  if (type == "新增") {
    title.value = "新增图书";
    form.bookname = "";
    form.author = "";
    form.publisher = "";
  } else {
    title.value = "修改图书";
    Object.assign(form, row);
  }
  dialogFormVisible.value = true;
};
const handleSubmit = (form: any) => {
  if (title.value === "新增图书") {
    handleAddBook(form);
  } else {
    handleUpdateEvent(form);
  }
};
const handleAddBook = (form: any) => {
  addBook(form).then(async (res) => {
    if (res.code === 200) {
      ElMessage({
        message: res.message,
        type: "success",
      });
      dialogFormVisible.value = false;
      await handleGetBookList();
    }
  });
};
const handleUpdateEvent = (form: any) => {
  updateBook(form).then(async (res) => {
    if (+res.code === 200) {
      ElMessage({
        message: res.message,
        type: "success",
      });
      dialogFormVisible.value = false;
      await handleGetBookList();
    }
  });
};
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
  width: 98%;
}
</style>
  