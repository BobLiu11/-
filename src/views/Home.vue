<template>
  <el-form :model="form" label-width="120px" center>
    <el-form-item label="用户名：">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="密码：">
      <el-input v-model="form.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit(form)">登录</el-button>
      <el-button type="primary" @click="onLogin">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { getLogin } from "../api/user"
import { ref, reactive } from 'vue'
import router from '../router';
import { useStore } from '../store'
import { ElMessage } from 'element-plus'
const tableData = ref([])
// const baseUrl = import.meta.env.VITE_BASE_URL
const count = ref(0)
const store = useStore()
const form = reactive({
  name: '',
  password: '',
})
const onSubmit = (form) => {
  getLogin(form).then(res => {
    console.log(res)
    if (res.message == '登录成功') {
      ElMessage({
        message: '登录成功.',
        type: 'success',
      })
      router.push({ path: '/layout' })
    } else if (res.message == '密码错误') {
      ElMessage({
        message: '密码错误,请重新输入.',
        type: 'warning',
      })
    } else {
      ElMessage({
        message: '用户不存在.',
        type: 'error',
      })
    }
    // router.push({ path: '/layout' })
  })
}

const onLogin = () => {
  router.push({ path: '/login' })
}
</script>

<style scoped lang="less">

</style>
    