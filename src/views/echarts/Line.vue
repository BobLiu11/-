<template>
    <div>
        <Header title="按钮组件"></Header>
        <div class="send_contain">
            <el-button type="primary" class="sendButton" :disabled="isCoolingDown" @click="startCooldown">me</el-button>
            <div class="overlay" v-if="isCoolingDown">
                <div class="scanner"></div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Header from "@/components/Header.vue";
import { onMounted, ref, reactive, computed } from "vue";
const isCoolingDown = ref(false)
const overlayWidth = ref('0%')
const scanProgress = ref(0)
const cooldownTime = ref(3000)
const startTime = ref(0)
const overlayStyle = computed(() => {
    if (isCoolingDown.value) {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime.value;
        const progress = elapsedTime / cooldownTime.value;
        const rotation = progress * 360; // 计算旋转角度（顺时针）
        return {
            transform: `rotate(${rotation}deg)`
        };
    }
    return {};
})
const startCooldown = () => {
    isCoolingDown.value = true;
    startTime.value = Date.now();
    setTimeout(() => {
        isCoolingDown.value = false;
        startTime.value = 0;
    }, cooldownTime.value);
}
const handleClick = () => {
    if (!isCoolingDown.value) {
        // 处理点击事件逻辑
        // 设置冷却时间为 3 秒
        isCoolingDown.value = true;
        const interval = setInterval(() => {
            scanProgress.value += 1
        }, 10);
        setTimeout(() => {
            clearInterval(interval);
            isCoolingDown.value = false;
            scanProgress.value = 0
        }, 3000);
    }
}
</script>
<style scoped lang="scss">
/* 样式定义 */
.send_contain {
    position: relative;
    width: 32px;
    height: 32px;
    background: rgba(60, 110, 240, 1);
    border-radius: 4px;
    margin: 4rem;
}

.sendButton {
    width: 32px;
    height: 32px;
    position: relative;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;
}

.scanner {
    position: absolute;
    top: calc(50% - 2px);
    left: calc(50% - 50px);
    width: 100px;
    height: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    transform-origin: center center;
    animation: scan 3s linear infinite;
}

@keyframes scan {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

</style>