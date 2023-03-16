<template>
    <el-form :model="form" label-width="120px" center>
        <el-form-item label="用户名：">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="密码：">
            <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item label="性别：">
            <el-select v-model="form.gender" placeholder="选择性别">
                <el-option label="男" value="男" />
                <el-option label="女" value="女" />
            </el-select>
        </el-form-item>
        <el-form-item label="年龄：">
            <el-input v-model="form.age" />
        </el-form-item>
        <el-form-item label="住址：">
            <el-input v-model="form.address" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit(form)">提交</el-button>
            <el-button type="primary" @click="handleCancle">取消</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script setup>
import { getLogin } from '@/api/user'
import { ref, reactive } from 'vue'
import router from '../router';
import { useStore } from '../store'
import { ElMessage } from 'element-plus'
const form = reactive({
    name: '',
    password: '',
    gender: "",
    age: "",
    address: "",
})
const onSubmit = (form) => {
    getLogin(form).then(res => {
        if (res.message == '登录成功') {
            ElMessage({
                message: '登录成功.',
                type: 'success',
            })
            router.push({ path: '/book' })
        } else if (res.message == '密码错误') {
            ElMessage({
                message: '密码错误,请重新输入.',
                type: 'warning',
            })
            return 
        } else {
            ElMessage({
                message: '用户不存在.',
                type: 'error',
            })
            return 
        }
    })
}

const handleCancle = () => {
    router.push({ path: '/' })
}
</script>
  
<style scoped lang="less">

</style>
      