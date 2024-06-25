<script setup>
</script>

<template lang="pug">
div
  h2 Desenvolvedor <br> Front-End
  h3 simples e rápido.
</template>

<style scoped>
h2 {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

h3 {
  font-size: 1.2rem;
  font-weight: 300;
}

@media screen and (max-width:1080px) {
  h2 {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
  br {
    display: none;
  }
  div {
    margin-bottom: 20px
  }
}
@media screen and (max-width:480px) {
  h2 {
    font-size: 1.25rem;
  }
  h3 {
    font-size: 1.1rem;
  }
}
</style>
