<template>
  <el-container class="common-layout">
    <el-aside class="aside-menu">
      <Menu class="menu_style"></Menu>
    </el-aside>
    <el-container class="container-style">
      <el-header class="header_style">
        <BreadCrumb></BreadCrumb>
      </el-header>
      <el-main class="main_style">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Menu from "./menu/Menu.vue";
import BreadCrumb from "./breadcrumb/Index.vue";
</script>
<style scoped lang="less">
.common-layout {
  width: 100vw;
  height: 100vh;
  .aside-menu {
    width: 200px;
    height: 100%;
    .menu_style {
      height: 100%;
      padding: 0;
      margin: 0;
    }
  }
  .container-style {
    background-color: rgb(237, 240, 243);
    .header_style {
      padding: 0;
      margin: 0 1rem;
      background-color: white;
    }
    .main_style {
      padding: 0;
    }
  }
}
</style>