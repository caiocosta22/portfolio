<script setup>
import Titulo from "src/components/Lateral/Titulo.vue";
</script>

<template lang="pug">
section.principal
  section.lateral
    Titulo

</template>

<style scoped>
.principal {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 100px
}

.lateral{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
