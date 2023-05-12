import { defineStore } from "pinia";

export const usersStore = defineStore("users", {
  state: () => ({ name: "" }),
  getters: {
    getName: (state) => state.name,
  },
  actions: {
    setName(newName: string) {
      this.name = newName;
    },
  },
});
