import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import type { RouteRecordRaw } from "vue-router";

type MyRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean;
  meta: {
    auth: Array<string>; //鉴权
    title: string; //页面标题
    icon: string; //页面图标
  };
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Login.vue"),
      meta: {
        auth: [],
        title: "",
        icon: "el-icon-menu",
      },
    },
    {
      path: "/layout",
      component: () => import("../views/Layout.vue"),
      redirect: "/home",
      meta: {
        auth: [],
        title: "layout",
        icon: "el-icon-menu",
      },
      children: [
        {
          path: "/home",
          component: () => import("../views/Home.vue"),
          meta: {
            auth: [],
            title: "首页",
            icon: "el-icon-menu",
            breadcrumb: [{ name: "首页", path: "/home" }],
          },
        },
        {
          path: "/book",
          component: () => import("../views/book/Book.vue"),
          meta: {
            auth: [],
            title: "book",
            icon: "el-icon-menu",
            breadcrumb: [{ name: "书籍管理", path: "/book" }],
          },
        },

        {
          path: "/common",
          component: () => import("../views/common/Index.vue"),
          redirect: "/count",
          meta: {
            auth: [],
            title: "common",
            icon: "el-icon-menu",
            breadcrumb: [{ name: "通用组件", path: "" }],
          },
          children: [
            {
              path: "/count",
              component: () => import("../views/common/CountUp.vue"),
              meta: {
                auth: [],
                title: "count",
                icon: "el-icon-menu",
                breadcrumb: [
                  { name: "通用组件", path: "" },
                  { name: "数字动画", path: "/count" },
                ],
              },
            },
            {
              path: "/barrage",
              component: () => import("../views/common/Barrage.vue"),
              meta: {
                auth: [],
                title: "barrage",
                icon: "el-icon-menu",
                breadcrumb: [
                  { name: "通用组件", path: "" },
                  { name: "弹幕组件", path: "/barrage" },
                ],
              },
            },
            {
              path: "/player",
              component: () => import("../views/common/Player.vue"),
              meta: {
                auth: [],
                title: "player",
                icon: "el-icon-menu",
                breadcrumb: [
                  { name: "通用组件", path: "" },
                  { name: "视频组件", path: "/player" },
                ],
              },
            },
            {
              path: "/qrcode",
              component: () => import("../views/common/Qrcode.vue"),
              meta: {
                auth: [],
                title: "qrcode",
                icon: "el-icon-menu",
                breadcrumb: [
                  { name: "通用组件", path: "" },
                  { name: "二维码组件", path: "/qrcode" },
                ],
              },
            },
            {
              path: "/canvas",
              component: () => import("../views/common/Canvas.vue"),
              meta: {
                auth: [],
                title: "canvas",
                icon: "el-icon-menu",
                breadcrumb: [
                  { name: "通用组件", path: "" },
                  { name: "canvas组件", path: "/canvas" },
                ],
              },
            },
            {
              path: "/svg",
              component: () => import("../views/common/Svg.vue"),
              meta: {
                auth: [],
                title: "svg",
                icon: "el-icon-message",
                breadcrumb: [
                  { name: "通用组件", path: "" },
                  { name: "svg组件", path: "/svg" },
                ],
              },
            },
            {
              path: "/music",
              component: () => import("../views/common/Music.vue"),
              meta: {
                auth: [],
                title: "svg",
                icon: "el-icon-music",
                breadcrumb: [
                  { name: "通用组件", path: "" },
                  { name: "Music组件", path: "/music" },
                ],
              },
            },
          ],
        },
        {
          path: "/socket",
          component: () => import("../views/socket/Index.vue"),
          meta: {
            auth: [],
            title: "socket",
            breadcrumb: [{ name: "socket", path: "/socket" }],
          },
        },
        {
          path: "/setting",
          component: () => import("../views/setting/Index.vue"),
          meta: {
            auth: [],
            title: "setting",
            breadcrumb: [{ name: "设置", path: "/setting" }],
          },
        },
      ],
    },
    {
      path: "/register",
      component: () => import("../views/Register.vue"),
      meta: {
        auth: [],
        title: "login",
        icon: "el-icon-menu",
      },
    },
    {
      path: "/*",
      component: () => import("../views/404.vue"),
      meta: {
        auth: [],
        title: "test",
        icon: "el-icon-menu",
      },
    },
  ] as MyRouteRecordRaw[],
});

export default router;
