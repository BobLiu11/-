<template>
  <div>
    <div class="header">
      <span>{{ "音乐组件" }}</span>
    </div>
    <div class="example">
      <!-- <div id="mse"></div> -->
    </div>
  </div>
</template>
    
<script setup>
import { onMounted, ref, reactive } from "vue";
import Player from "xgplayer";
// onMounted(() => {
//   new Player({
//     id: "mse",
//     autoplay: false,
//     volume: 0.3,
//     url: "//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4",
//     poster:
//       "//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
//     playsinline: true,
//     controlPlugins: [],
//     pip: true, //打开画中画功能
//     height: window.innerHeight,
//     width: window.innerWidth,
//   });
// });
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
  font-size: 80px;
  font-weight: 500;
  // background: linear-gradient(45deg, #5ac381, #20568b);
  height: 20rem;

  #mse {
    width: 5rem;
    height: 5rem;
  }
}
</style>