<template>
  <div class="breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight" separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="right_container">
      <el-badge class="item" :value="3">
        <el-button :icon="Bell" />
      </el-badge>
      <el-avatar
        class="avatar_style"
        shape="square"
        :size="30"
        fit="fill"
        :src="url"
      />
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ users_store.getName }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleSignOut()">退出</el-dropdown-item>
            <!-- <el-dropdown-item>Action 2</el-dropdown-item> -->
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { usersStore } from "../../store/user";
import { useRouter, useRoute } from "vue-router";
import { Bell } from "@element-plus/icons-vue";
const users_store = usersStore();
const url = ref(
  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
);
const router = useRouter();
const route = useRoute();
const handleSignOut = () => {
  router.push({ path: "/" });
};
</script>
  
<style scoped lang="scss">
.breadcrumb {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  line-height: 1;
  padding-left: 0.5rem;
}

:deep(.el-breadcrumb) {
  font: 1rem "Fira Sans", sans-serif;
}

.right_container {
  margin-right: 0.5rem;
  width: 15%;
  height: 100%;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .avatar_style {
    height: 2rem;
    width: 2rem;
    border-radius: 10%;
  }
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>