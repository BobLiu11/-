<template>
    <div class="breadcrumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item>promotion management</el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="right_container">
            <el-badge class="item" :value="3">
                <el-button :icon="Bell" />
            </el-badge>
            <!-- <el-avatar class="avatar_style" shape="square" fit="fill" :src="imgUrl" /> -->
        </div>
    </div>

</template>
  
<script lang="ts" setup>
import { ArrowRight, Bell } from '@element-plus/icons-vue'
// import imgUrl from '../../assets/header.jpeg'
</script>
  
<style scoped lang="scss">
.breadcrumb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    line-height: 1;
    //background-color: rgb(246, 248, 248);
    border-bottom: 0.5rem;
    padding-left: 1rem;
    border-bottom: 0.13rem solid rgb(142, 142, 139);
}

:deep(.el-breadcrumb) {
    font: 1rem "Fira Sans", sans-serif;
}

.right_container {
    margin-right: 1rem;
    width: 10%;
    height: 100%;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .bell_style {
        height: 40%;
    }

    .avatar_style {
        height: 60%;
        border-radius: 30%;
        margin-top: 0.5rem;
    }

    .item {
        margin-top: 10px;
        margin-right: 40px;
    }
}
</style>