<template>
  <div>
    <div class="header">
      <span>{{ "canvas组件" }}</span>
    </div>
    <div class="example">
      <canvas class="canvas_style" id="tutorial" width="150" height="150">
        current stock price: $3.15 +0.15
      </canvas>
      <canvas class="canvas_style" id="canvas" width="150" height="150">
      </canvas>
      <canvas class="canvas_style" id="smile" width="150" height="150">
      </canvas>
      <canvas class="canvas_style" id="quadratic" width="150" height="150">
      </canvas>
      <canvas class="canvas_style" id="bezier" width="150" height="150">
      </canvas>
      <canvas class="canvas_style" id="strokeStyle" width="150" height="150">
      </canvas>
      <canvas class="canvas_style" id="globalAlpha" width="150" height="150">
      </canvas>
      <canvas class="canvas_style" id="shadowColor" width="150" height="150">
      </canvas>
      <canvas class="canvas_style" id="translate" width="150" height="150">
      </canvas>
      <canvas class="canvas_style" id="rotate" width="150" height="150">
      </canvas>
      <canvas class="canvas_style" id="transform" width="150" height="150">
      </canvas>
      <canvas class="canvas_style" id="clip" width="150" height="150"> </canvas>
      <canvas class="canvas_style" id="clock" width="150" height="150">
      </canvas>
    </div>
  </div>
</template>
  
<script setup>
import { onMounted, ref, reactive } from "vue";
onMounted(() => {
  const tutorial = document.getElementById("tutorial");
  if (tutorial.getContext) {
    const ctx = tutorial.getContext("2d");
    ctx.fillStyle = "rgb(200,0,0)"; //设置图形的填充颜色
    ctx.fillRect(10, 10, 55, 50); //绘制一个填充的矩形  x,y,width,height
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 55, 50);
    // ctx.clearRect(30, 30, 55, 50);//清除指定矩形区域，让清除部分完全透明。
    // ctx.strokeRect(50, 50, 50, 50);//绘制一个矩形的边框
  }

  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    ctx.beginPath(); //新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
    ctx.moveTo(75, 50); //将笔触移动到指定的坐标(x,y)上
    ctx.lineTo(100, 75); //直线终点的(x,y)坐标
    ctx.lineTo(100, 25);
    ctx.fill(); //通过填充路径的内容区域生成实心的图形
  }

  const smile = document.getElementById("smile");
  if (smile.getContext) {
    let ctx = smile.getContext("2d");
    ctx.beginPath();
    //画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆），从 startAngle 开始到 endAngle 结束，按照 anticlockwise 给定的方向（默认为顺时针）来生成。anticlockwise为 true 时，是逆时针方向，否则顺时针方向。
    //arc(x, y, radius, startAngle, endAngle, anticlockwise)
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // 口 (顺时针)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
    ctx.stroke(); //通过线条来绘制图形轮廓。
  }

  const quadratic = document.getElementById("quadratic");
  if (quadratic.getContext) {
    let ctx = quadratic.getContext("2d");
    //二次贝塞尔曲线
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5); //(cp1x, cp1y, x, y) cp1x,cp1y为一个控制点，x,y 为结束点。
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
  }

  const bezier = document.getElementById("bezier");
  if (bezier.getContext) {
    let ctx = bezier.getContext("2d");
    //三次贝塞尔曲线
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25); //(cp1x, cp1y, cp2x, cp2y, x, y)cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.stroke();
  }

  const strokeStyle = document.getElementById("strokeStyle");
  if (strokeStyle.getContext) {
    let ctx = strokeStyle.getContext("2d");
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        ctx.strokeStyle =
          "rgb(0," +
          Math.floor(255 - 42.5 * i) +
          "," +
          Math.floor(255 - 42.5 * j) +
          ")";
        ctx.beginPath();
        ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
        ctx.stroke();
      }
    }
  }

  const globalAlpha = document.getElementById("globalAlpha");
  if (globalAlpha.getContext) {
    let ctx = globalAlpha.getContext("2d");
    // 画背景
    ctx.fillStyle = "#FD0";
    ctx.fillRect(0, 0, 75, 75);
    ctx.fillStyle = "#6C0";
    ctx.fillRect(75, 0, 75, 75);
    ctx.fillStyle = "#09F";
    ctx.fillRect(0, 75, 75, 75);
    ctx.fillStyle = "#F30";
    ctx.fillRect(75, 75, 75, 75);
    ctx.fillStyle = "#FFF";
    // 设置透明度值
    ctx.globalAlpha = 0.2;
    // 画半透明圆
    for (let i = 0; i < 7; i++) {
      ctx.beginPath();
      ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
      ctx.fill();
    }
  }

  const shadowColor = document.getElementById("shadowColor");
  if (shadowColor.getContext) {
    let ctx = shadowColor.getContext("2d");
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    //ctx.textAlign = "center"
    ctx.font = "20px Times New Roman";
    ctx.fillStyle = "Black";
    ctx.fillText("Sample String", 20, 20); //(text, x, y, [maxWidth]);
    ctx.font = "20px serif";
    ctx.strokeText("Hello world", 20, 100);
  }

  const translate = document.getElementById("translate");
  if (translate.getContext) {
    let ctx = translate.getContext("2d");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.save();
        ctx.fillStyle = "rgb(" + 51 * i + ", " + (255 - 51 * i) + ", 255)";
        ctx.translate(10 + j * 50, 10 + i * 50);
        ctx.fillRect(0, 0, 25, 25);
        ctx.restore();
      }
    }
  }

  const rotate = document.getElementById("rotate");
  if (rotate.getContext) {
    let ctx = rotate.getContext("2d");
    ctx.translate(75, 75);
    for (let i = 1; i < 6; i++) {
      // Loop through rings (from inside to out)
      ctx.save();
      ctx.fillStyle = "rgb(" + 51 * i + "," + (255 - 51 * i) + ",255)";
      for (let j = 0; j < i * 6; j++) {
        // draw individual dots
        ctx.rotate((Math.PI * 2) / (i * 6));
        ctx.beginPath();
        ctx.arc(0, i * 12.5, 5, 0, Math.PI * 2, true);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  const transform = document.getElementById("transform");
  if (transform.getContext) {
    let ctx = transform.getContext("2d");
    let sin = Math.sin(Math.PI / 6);
    let cos = Math.cos(Math.PI / 6);
    ctx.translate(75, 75);
    let c = 0;
    for (let i = 0; i <= 12; i++) {
      c = Math.floor((255 / 12) * i);
      ctx.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
      ctx.fillRect(0, 0, 60, 10);
      ctx.transform(cos, sin, -sin, cos, 0, 0);
    }
  }

  const clip = document.getElementById("clip");
  if (clip.getContext) {
    let ctx = clip.getContext("2d");
    ctx.fillRect(0, 0, 150, 150);
    ctx.translate(75, 75);
    ctx.beginPath();
    ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
    ctx.clip();
    let lingrad = ctx.createLinearGradient(0, -75, 0, 75);
    lingrad.addColorStop(0, "#232256");
    lingrad.addColorStop(1, "#143778");
    ctx.fillStyle = lingrad;
    ctx.fillRect(-75, -75, 150, 150);
    for (var j = 1; j < 50; j++) {
      ctx.save();
      ctx.fillStyle = "#fff";
      ctx.translate(
        75 - Math.floor(Math.random() * 150),
        75 - Math.floor(Math.random() * 150)
      );
      drawStar(ctx, Math.floor(Math.random() * 4) + 2);
      ctx.restore();
    }
  }

  const clock = () => {
    var now = new Date();
    var ctx = document.getElementById("clock").getContext("2d");
    ctx.save();
    ctx.clearRect(0, 0, 150, 150);
    ctx.translate(75, 75);
    ctx.scale(0.4, 0.4);
    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    // Hour marks
    ctx.save();
    for (var i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.rotate(Math.PI / 6);
      ctx.moveTo(100, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.restore();
    // Minute marks
    ctx.save();
    ctx.lineWidth = 5;
    for (i = 0; i < 60; i++) {
      if (i % 5 != 0) {
        ctx.beginPath();
        ctx.moveTo(117, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
      }
      ctx.rotate(Math.PI / 30);
    }
    ctx.restore();

    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr = now.getHours();
    hr = hr >= 12 ? hr - 12 : hr;

    ctx.fillStyle = "black";
    // write Hours
    ctx.save();
    ctx.rotate(
      hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec
    );
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();
    // write Minutes
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore();
    // Write seconds
    ctx.save();
    ctx.rotate((sec * Math.PI) / 30);
    ctx.strokeStyle = "#D40000";
    ctx.fillStyle = "#D40000";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(83, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();

    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = "#325FA2";
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.restore();
    window.requestAnimationFrame(clock);
  };
  window.requestAnimationFrame(clock);
});
const drawStar = (ctx, r) => {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r, 0);
  for (var i = 0; i < 9; i++) {
    ctx.rotate(Math.PI / 5);
    if (i % 2 == 0) {
      ctx.lineTo((r / 0.525731) * 0.200811, 0);
    } else {
      ctx.lineTo(r, 0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
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
  justify-items: space-around;
  flex-wrap: wrap;
  margin: 1rem;
  background-color: #fff;
  height: 47rem;
}

.canvas_style {
  border: 1px solid black;
  margin: 1rem;
}
</style>