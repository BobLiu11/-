<template>
  <div class="home_style">
    <div>
      <el-form
        ref="ruleFormRef"
        :model="form"
        label-width="100px"
        :rules="rules"
        center
      >
        <el-form-item label="用户名：" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input v-model="form.password" />
        </el-form-item>
      </el-form>
      <div>
        <el-button type="primary" @click="onSubmit(ruleFormRef, form)"
          >登录</el-button
        >
        <!-- <el-button type="primary" @click="onLogin">注册</el-button> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { getLogin } from "../api/user";
import { ref, reactive } from "vue";
import router from "../router";
import { storeToRefs } from "pinia";
import { usersStore } from "../store/user";
import { ElMessage } from "element-plus";
const store = usersStore();
const { name } = storeToRefs(store);
const tableData = ref([]);
const count = ref(0);
const ruleFormRef = ref();
const form = reactive({
  name: "",
  password: "",
});
const rules = reactive({
  name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});
const onSubmit = (ruleFormRef, form) => {
  ruleFormRef.validate(async (valid, fields) => {
    if (valid) {
      await handleLogin();
    } else {
      console.log("error submit!", fields);
    }
  });
};

const handleLogin = async () => {
  await getLogin(form).then(async (res) => {
    if (res.message == "登录成功") {
      await router.push({ path: "/layout" });
      ElMessage({
        message: "登录成功.",
        type: "success",
      });
      await store.setName(res.result.user_name);
    } else if (res.message == "密码错误") {
      ElMessage({
        message: "密码错误,请重新输入.",
        type: "warning",
      });
    } else {
      ElMessage({
        message: "用户不存在.",
        type: "error",
      });
    }
  });
};

const onLogin = () => {
  router.push({ path: "/login" });
};
</script>

<style scoped lang="less">
.home_style {
  width: 100vw;
  height: 100vh;
  background-image: url("../../src/assets/bg.jpg");
  background-repeat: no-repeat, no-repeat;
  background-size: 100% 120%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
    