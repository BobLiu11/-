<template>
    <div class="header">
        <span>{{ 'svg组件' }}</span>
    </div>
    <div class="example">
        <svg class="svg_style" id="tutorial" width="150" height="150"></svg>
    </div>
</template>
  
<script setup>
import { onMounted, ref, reactive } from 'vue'
onMounted(() => {

})
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