<template>
  <div class="home_style">
    <Line></Line>
  </div>
</template>

<script setup lang="ts">
import Line from "@/views/echarts/Line.vue";
import { getLogin } from "../api/user";
import { ref, reactive } from "vue";
import router from "../router";
import { storeToRefs } from "pinia";
import { useUsersStore } from "@/store";
import { ElMessage } from "element-plus";
const usersStore = useUsersStore();
const { name } = storeToRefs(usersStore);
</script>

<style scoped lang="less"></style>
    