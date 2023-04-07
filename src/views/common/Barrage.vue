<template>
  <div>
    <div class="header">
      <span>{{ "弹幕组件" }}</span>
    </div>
    <vue-danmaku class="example" loop :danmus="danmus"></vue-danmaku>
  </div>
</template>
  
<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import vueDanmaku from "vue3-danmaku";
const danmus = ref(["danmu1", "danmu2", "danmu3", "..."]);
</script>
<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  margin: 1rem;
  padding: 0.5rem;
  background-color: #fff;
  height: 4rem;
}

.example {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  color: #f6416c !important;
  font-size: 80px;
  font-weight: 500;
  background: linear-gradient(45deg, #5ac381, #20568b);
  height: 50%;
}
</style>