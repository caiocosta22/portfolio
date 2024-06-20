<script setup>
import Titulo from "src/components/Lateral/Titulo.vue";
import Menu from "src/components/Lateral/Menu.vue";
</script>

<template lang="pug">
section.principal
  section.lateral
    Titulo
    Menu
</template>

<style scoped>
.principal {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 100px
}

.lateral {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
