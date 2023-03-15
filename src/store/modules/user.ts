import type { Module } from "vuex";
import { State } from "../index";

const userState = {
  name: "用户名",
};

export type UserState = typeof userState;

export default {
  namespaced: true,
  state: userState,
  mutations: {
    setName(state, payload: string) {
      state.name = payload;
    },
  },
} as Module<UserState, State>;