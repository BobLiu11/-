import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App)
  .use(router)
  .use(createPinia())
  .use(ElementPlus)
  .use(store, key);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
// // 主应用的入口文件
// import { registerMicroApps, setDefaultMountApp,start } from 'qiankun';
// registerMicroApps([
//   {
//     name: 'vue-project', // 应用名称，必须唯一
//     entry: 'http://localhost:5173', // 子应用的地址
//     container: '#parentContainer', // 页面中挂载子应用的元素节点
//     activeRule: '/goChild', // 触发子应用加载的页面url
//   },
// ]);
// start(); // 运行乾坤
