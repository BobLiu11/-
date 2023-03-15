<template>
    <div class="header">
        <span>{{ '二维码组件' }}</span>
    </div>
    <qrcode-vue class="example" :value="dataUrl" level="H"></qrcode-vue>
</template>
<script setup lang="ts">
import QrcodeVue from 'qrcode.vue'
import { onMounted, ref, reactive } from 'vue'
const dataUrl = ref("https://baidu.com")
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
    background-color: #fff;
    height: 50%;
}
</style>