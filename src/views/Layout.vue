<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <Menu class="menu_style"></Menu>
            </el-aside>
            <el-container>
                <el-header class="header_style">
                    <BreadCrumb></BreadCrumb>
                </el-header>
                <el-main class="main_style">
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import Menu from "./menu/Menu.vue";
import BreadCrumb from "./breadcrumb/Index.vue";
</script>
<style scoped lang="less">
.header_content {
    background-color: #fff;
    line-height: 1;
}

.common-layout {
    width: 100vw;
    height: 100vh;

    .main_style {
        background-color: rgb(237, 240, 243);
        padding: 0;
    }
}

.menu_style {
    height: 60rem;
    padding: 0%;
    margin: 0;
}

.header_style {
    padding: 0;
    margin: 0;
}
</style>