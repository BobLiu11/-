import { defineStore } from "pinia";

export const useMenusStore = defineStore("menus", {
  state: () => ({ activeIndex: "1" }),
  getters: {
    getActiveIndex: (state) => state.activeIndex,
  },
  actions: {
    setActiveIndex(activeIndex: string) {
      this.activeIndex = activeIndex;
    },
  },
});
