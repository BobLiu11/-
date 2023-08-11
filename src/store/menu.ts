import { defineStore } from "pinia";

export const useMenusStore = defineStore("menus", {
  state: () => ({
    activeIndex: "0",
    activeMenu: [
      {
        index: "0",
        title: "首页",
        path: "/home",
      },
    ],
  }),
  getters: {
    getActiveIndex: (state) => state.activeIndex,
    getActiveMenu: (state) => state.activeMenu,
  },
  actions: {
    setActiveIndex(activeIndex: string) {
      this.activeIndex = activeIndex;
    },
    setActiveMenu(activeMenu: Array<any>) {
      this.activeMenu = activeMenu;
    },
  },
});
