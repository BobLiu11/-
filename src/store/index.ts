import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import user, { UserState } from "./modules/user";

// 为 store state 声明类型
export interface State {
  name: string;
  user?:UserState
};
// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    name: "vuex",
  },
  modules:{
    user
  }
});
// 定义自己的 `useStore` 组合式函数
export function useStore () {
    return baseUseStore(key)
  }