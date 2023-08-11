<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbItems" :key="index" :to="{ path: item.path }">
      {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
  
<script lang="ts" setup>
const props = defineProps({
  breadcrumbItems: {
    type: Array as () => Array<any>,
    required: true,
  },
});
</script>
  