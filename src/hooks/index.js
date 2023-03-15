import { useStore as baseUseStore } from "vuex";
import { key } from "../store";

export function useStore () {
  return baseUseStore(key)
}