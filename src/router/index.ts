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
      component: () => import("../views/Home.vue"),
      //hidden: true,
      meta: {
        auth: [],
        title: "首页",
        icon: "el-icon-menu",
      },
    },
    {
      path: "/layout",
      component: () => import("../views/Layout.vue"),
      //hidden: true,
      redirect: "/book",
      meta: {
        auth: [],
        title: "layout",
        icon: "el-icon-menu",
      },
      children: [
        {
          path: "/book",
          component: () => import("../views/book/Book.vue"),
          //hidden: true,
          meta: {
            auth: [],
            title: "book",
            icon: "el-icon-menu",
          },
        },
        {
          path: "/setting",
          component: () => import("../views/setting/Index.vue"),
          //hidden: true,
          meta: {
            auth: [],
            title: "setting",
            icon: "el-icon-menu",
          },
        },
        {
          path: "/common",
          component: () => import("../views/common/Index.vue"),
          //hidden: true,
          redirect: "/count",
          meta: {
            auth: [],
            title: "common",
            icon: "el-icon-menu",
          },
          children: [
            {
              path: "/count",
              component: () => import("../views/common/CountUp.vue"),
              meta: {
                auth: [],
                title: "count",
                icon: "el-icon-menu",
              },
            },
            {
              path: "/barrage",
              component: () => import("../views/common/Barrage.vue"),
              meta: {
                auth: [],
                title: "barrage",
                icon: "el-icon-menu",
              },
            },
            {
              path: "/player",
              component: () => import("../views/common/Player.vue"),
              meta: {
                auth: [],
                title: "player",
                icon: "el-icon-menu",
              },
            },
            {
              path: "/qrcode",
              component: () => import("../views/common/Qrcode.vue"),
              meta: {
                auth: [],
                title: "qrcode",
                icon: "el-icon-menu",
              },
            },
            {
              path: "/canvas",
              component: () => import("../views/common/Canvas.vue"),
              meta: {
                auth: [],
                title: "canvas",
                icon: "el-icon-menu",
              },
            },
            {
              path: "/svg",
              component: () => import("../views/common/Svg.vue"),
              meta: {
                auth: [],
                title: "svg",
                icon: "el-icon-menu",
              },
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue"),
      //hidden: true,
      meta: {
        auth: [],
        title: "login",
        icon: "el-icon-menu",
      },
    },
    // {
    //   path: "/test",
    //   component: ()=> import("../views/Test.vue"),
    //   //hidden: true,
    //   meta: {
    //     auth: [],
    //     title: "test",
    //     icon: "el-icon-menu",
    //   },
    // },
  ] as MyRouteRecordRaw[],
});

export default router;
