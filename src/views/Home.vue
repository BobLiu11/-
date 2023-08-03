<template>
  <div class="home_style">
    <span>
      展示一些echarts图
    </span>
  </div>
</template>

<script setup lang="ts">
import { getLogin } from "../api/user";
import { ref, reactive } from "vue";
import router from "../router";
import { storeToRefs } from "pinia";
import { usersStore } from "../store/user";
import { ElMessage } from "element-plus";
const store = usersStore();
const { name } = storeToRefs(store);




</script>

<style scoped lang="less">
</style>
    