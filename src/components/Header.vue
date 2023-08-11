<template>
  <div class="header">
    <span>{{ title }}</span>
  </div>
</template>
<script lang="ts" setup>

const props = defineProps(['title'])


</script>
<style>
.header {
  display: flex;
  align-items: center;
  margin: 1rem;
  padding: 0.5rem;
  background-color: #fff;
  height: 4rem;
}
</style>