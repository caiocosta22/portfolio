<script setup>
import Titulo from "src/components/Lateral/Titulo.vue";
import Menu from "src/components/Lateral/Menu.vue";
import Sociais from "src/components/Lateral/Sociais.vue";

import Experiencia from "src/components/Conteudo/Experiencia.vue";
</script>

<template lang="pug">
section.principal
  section.lateral
    Titulo
    Menu
    Sociais
  section.conteudo
    Experiencia
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
