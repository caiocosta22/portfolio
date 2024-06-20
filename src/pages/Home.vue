<script setup>
import { computed } from "vue";
import { useMenuStore } from "src/stores/menu-store.js";
import { Titulo, Menu, Sociais, Sobre, Experiencia } from "src/router/index.js";

const menuStore = useMenuStore();
const menuAtual = computed(() => { return menuStore.menuAtual; });
</script>

<template lang="pug">
section.principal
  section.lateral
    Titulo
    Menu
    Sociais
  section.conteudo
    Sobre(
      v-if="menuAtual === 1 "
    )
    Experiencia(
      v-if="menuAtual === 2 "
    )
</template>

<style scoped>
.principal {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 150px;
  height: 100%;
}

.lateral {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
