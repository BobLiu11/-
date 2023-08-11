<template>
  <div>
    <Header title="svg组件"></Header>
    <div class="example">
      <!-- <svg class="svg_style" id="tutorial" width="150" height="150"></svg> -->
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { onMounted, ref, reactive } from "vue";
import Header from "@/components/Header.vue";
onMounted(() => { });
</script>
<style scoped lang="scss">
.example {
  display: flex;
  align-items: center;
  justify-items: space-around;
  flex-wrap: wrap;
  margin: 1rem;
  background-color: #fff;
  height: 50%;
}

.svg_style {
  border: 1px solid black;
  margin: 1rem;
}
</style>