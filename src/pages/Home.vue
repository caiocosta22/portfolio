<script setup>
import { Titulo, Menu, Sociais, Sobre, Experiencia } from "src/router/index.js";
</script>

<template lang="pug">
section.principal
  section.lateral
    Titulo
    Menu
    Sociais
  section.conteudo
    Sobre
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
