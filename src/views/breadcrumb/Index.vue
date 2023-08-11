<template>
  <div class="breadcrumb">
    <BreadcrumbItem :breadcrumbItems="menusStore.getActiveMenu" />
    <div class="right_container">
      <el-badge class="item" :value="3">
        <el-button :icon="Bell" />
      </el-badge>
      <el-avatar class="avatar_style" shape="square" :size="30" fit="fill" :src="url" />
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
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { ref, watch, reactive, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Bell } from "@element-plus/icons-vue";
import BreadcrumbItem from "./BreadcrumbItem.vue";
import { useUsersStore, useMenusStore } from '@/store'
const menusStore = useMenusStore();
const users_store = useUsersStore();
const url = ref(
  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
);
const router = useRouter();
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