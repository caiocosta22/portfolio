import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", {
  state: () => ({
    menuAtual: 1
  }),
  actions: {
    setMenuAtual (id) {
      this.menuAtual = id;
    }
  }
});
