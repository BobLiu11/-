<template>
  <div>
    <Header title="二维码组件"></Header>
    <qrcode-vue class="example" :value="dataUrl" level="H"></qrcode-vue>
  </div>
</template>
<script setup lang="ts">
import Header from "@/components/Header.vue";
import QrcodeVue from "qrcode.vue";
import { onMounted, ref, reactive } from "vue";
const dataUrl = ref("https://baidu.com");
</script>
<style scoped lang="scss">
.example {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  background-color: #fff;
  height: 47rem;
}
</style>