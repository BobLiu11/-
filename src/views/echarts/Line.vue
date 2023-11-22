<template>
    <div>
        <!-- <Header title="按钮组件"></Header> -->
        <!-- <div class="send_contain">
            <el-button type="primary" class="sendButton" :disabled="isCoolingDown" @click="handleClick">me</el-button>
            <div class="overlay" v-if="isCoolingDown">
                <div class="scanner"></div>
                <div class="scanner scan_animation"></div>
            </div>
        </div> -->

        <div class="cooldown-button">
            <button :disabled="isCoolingDown" @click="startCooldown">按钮</button>
            <div v-if="isCoolingDown" class="cooldown-overlay" :style="overlayStyle"></div>
        </div>

    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from "vue";
const isCoolingDown = ref(false)
const cooldownTime = ref(3000)
const overlayStyle = reactive({
    // 遮罩的初始样式
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
})
onMounted(() => {
    const button = document.querySelector('.cooldown-button button');
    const radius = Math.max(button.offsetWidth, button.offsetHeight) / 2;
    overlayStyle.backgroundSize = `${radius * 2}px ${radius * 2}px`;
});
const scanProgress = ref(0)
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

const startCooldown = () => {
    isCoolingDown.value = true;
    setTimeout(() => {
        isCoolingDown.value = false;
    }, cooldownTime);
    const button = document.querySelector('.cooldown-button button');
    const radius = Math.max(button.offsetWidth, button.offsetHeight) / 2;
    const circumference = 2 * Math.PI * radius;
    let progress = 0;
    const sweepOverlay = () => {
        progress += 1 / circumference;
        overlayStyle.backgroundImage = `conic-gradient(transparent 0%, transparent ${progress * 100}%, rgba(0, 0, 0, 0.5) ${progress * 100}%, rgba(0, 0, 0, 0.5) 100%)`;
        if (isCoolingDown.value && progress < 1) {
            requestAnimationFrame(sweepOverlay);
        }
    };
    requestAnimationFrame(sweepOverlay);
}
</script>
<style scoped lang="scss">
/* 样式定义 */
.send_contain {
    position: relative;
    margin: 5rem;
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
    bottom: calc(50%);
    left: calc(50%);
    width: 1px;
    height: 16px;
    background-color: rgba(0, 0, 0, 0.5);
    transform-origin: bottom center;
}

.scan_animation {
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



.cooldown-button {
    position: relative;
    margin-top: 4rem;
}

.cooldown-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}
</style>