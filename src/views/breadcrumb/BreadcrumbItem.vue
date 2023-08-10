<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item
      v-for="(item, index) in breadcrumbItems"
      :key="index"
      :to="item.path"
    >
      {{ item.title }}
      <BreadcrumbItem :breadcrumbItems="item.children" v-if="item.children" />
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
  