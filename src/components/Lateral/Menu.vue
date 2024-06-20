<script setup>
import { ref } from "vue";

const menus = ref([
  {
    titulo: "sobre",
    isAtivo: true
  },
  {
    titulo: "experiência",
    isAtivo: false
  },
  {
    titulo: "projetos",
    isAtivo: false
  },
  {
    titulo: "formação",
    isAtivo: false
  }
]);

const ativaMenu = (titulo) => {
  menus.value.forEach((menu) => {
    menu.titulo !== titulo ? menu.isAtivo = false : menu.isAtivo = true;
  });
};
</script>

<template lang="pug">
ul
  li(
    v-for="menu in menus"
    :key="menu.titulo"
    :class="{ ativo: menu.isAtivo }"
    @click="ativaMenu(menu.titulo)"
  )
    span {{ menu.titulo }}
</template>

<style scoped>
ul {
  margin-top: 100px
}

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
  transform: translate(20px, 0px);
}

li:not(.ativo):hover::before {
  content: "";
  color: var(--orange-light);
  position: absolute;
  top: 8px;
  left: -20px;
  background-color: var(--orange-light);
  width: 10px;
  height: 10px;
  border-radius: 15px;
}
</style>
