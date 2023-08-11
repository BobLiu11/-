<template>
  <div class="menu-style">
    <!-- <div class="collapse-style">
      <el-icon :size="20" v-if="isCollapse" @click="handleClose"><Expand /></el-icon>
      <el-icon :size="20" v-else @click="handleClose"><Fold /></el-icon>
    </div> -->
    <el-menu :default-active=activeIndex class="el-menu-vertical-demo" :collapse="isCollapse">
      <div v-for="(item, index) in menu" :key="index">
        <el-sub-menu v-if="item.children && item.children.length" :index="item.index">
          <template #title>
            <el-icon :size="20">
              <component :is="item.icon" />
            </el-icon>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item v-for="(subItem, index) in item.children" :key="index" :index="subItem.index"
            @click="handleMenu(subItem)">
            <el-icon :size="20">
              <component :is="subItem.icon" />
            </el-icon>
            <span>{{ subItem.title }}</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="item.index" @click="handleMenu(item)">
          <el-icon :size="20">
            <component :is="item.icon" />
          </el-icon>
          <span>{{ item.title }}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
  
<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { menu } from "@/mock/menu.ts";
import { useUsersStore, useMenusStore } from '@/store'
const router = useRouter();
const menusStore = useMenusStore();
const isCollapse = ref(false);
const activeIndex = ref("0");
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = () => {
  isCollapse.value = !isCollapse.value;
};
const findPath = (tree, index) => {
  for (const node of tree) {
    // 如果当前节点的 id 与目标节点相同，则返回包含当前节点 id 的路径
    if (node.index === index) {
      return [node];
    }
    // 如果当前节点有子节点，则递归查找目标节点
    if (node.children) {
      const path = findPath(node.children, index);
      if (path.length > 0) {
        // 如果在子节点中找到了目标节点，将当前节点的 id 添加到路径中并返回
        return [node, ...path];
      }
    }
  }
  // 如果在整个树中未找到目标节点，返回空数组表示未找到
  return [];
}
const handleMenu = (item) => {
  menusStore.setActiveIndex(item.index)
  const pathList = findPath(menu, item.index)
  menusStore.setActiveMenu(pathList)
  if (item.path) {
    router.push({ path: item.path });
  }
};
</script>
<style scope lang="scss">
.menu-style {
  position: relative;

  .collapse-style {
    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>