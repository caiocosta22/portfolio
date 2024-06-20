<script setup>
import { ref } from "vue";

import { useMenuStore } from "src/stores/menu-store.js";

const menuStore = useMenuStore();

const menus = ref([
  {
    titulo: "sobre",
    isAtivo: true,
    id: 1
  },
  {
    titulo: "experiência",
    isAtivo: false,
    id: 2
  },
  {
    titulo: "projetos",
    isAtivo: false,
    id: 3
  },
  {
    titulo: "formação",
    isAtivo: false,
    id: 4
  }
]);

const ativaMenu = (objeto) => {
  menus.value.forEach((menu) => {
    menu.titulo !== objeto.titulo ? menu.isAtivo = false : menu.isAtivo = true;
    menuStore.setMenuAtual(objeto.id);
  });
};
</script>

<template lang="pug">
ul
  li(
    v-for="menu in menus"
    :key="menu.titulo"
    :class="{ ativo: menu.isAtivo }"
    @click="ativaMenu(menu)"
  )
    span {{ menu.titulo }}
</template>

<style scoped>

li {
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;
}

span {
  font-size: 1.2rem;
}

.ativo {
  font-weight: bold;
  transition: ease-in-out 0.3s;
  transform: translate(20px, 0px);
}

.ativo::before{
  content:"";
  color: var(--orange-light);
  position: absolute;
  top: 8px;
  left: -20px;
  background-color: var(--orange-light);
  width: 10px;
  height: 10px;
  border-radius: 15px
}

li:not(.ativo):hover {
  font-weight: bold;
  transition: ease-in-out 0.3s;
}

</style>
