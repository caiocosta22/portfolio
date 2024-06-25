<script setup>
import { computed } from "vue";
import { useMenuStore } from "src/stores/menu-store.js";
import { Titulo, Menu, Sociais, Sobre, Experiencia, Projetos, Formacao } from "src/router/index.js";

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
    Projetos(
      v-if="menuAtual === 3 "
    )
    Formacao(
      v-if="menuAtual === 4 "
    )
</template>

<style scoped>
.principal {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 150px;
  height: 80vh;
}

.lateral {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media screen and (max-height: 800px) {
  .lateral {
    gap: 120px;
  }
}
</style>
