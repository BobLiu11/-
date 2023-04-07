<template>
  <div>
    <div class="header">
      <span>{{ "数字动画：￥2022" }}</span>
    </div>
    <count-up
      class="example"
      :start-val="0"
      :end-val="2022"
      :options="options"
      :duration="4"
    ></count-up>
  </div>
</template>

<script setup lang="ts">
import CountUp from "vue-countup-v3";
const options = {
  separator: "❤️",
};
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
  color: #f6416c;
  font-size: 80px;
  font-weight: 500;
  background-color: #fff;
  height: 47rem;
}
</style>
