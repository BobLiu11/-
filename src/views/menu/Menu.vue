<template>
  <el-menu default-active="1" class="el-menu-vertical-demo">
    <template>
      <div v-for="(item, index) in menu" :key="index">
        <el-sub-menu
          v-if="item.children && item.children.length"
          :index="item.index"
        >
          <template #title>
            <el-icon :size="20">
              <component :is="item.icon" />
            </el-icon>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
            v-for="(subItem, index) in item.children"
            :key="index"
            :index="subItem.index"
            @click="handleMenu(subItem)"
          >
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
    </template>
  </el-menu>
</template>
  
<script setup>
import { useRoute, useRouter } from "vue-router";
import { menu } from "../../mock/menu.js";
const router = useRouter();

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleMenu = (item) => {
  console.log(item);
  if (item.path) {
    router.push({ path: item.path });
  }
};
</script>
  