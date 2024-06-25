<script setup>
import Header from "src/components/Header/Header.vue";
</script>

<template lang="pug">
q-layout.container(
  view="hHh lpr fff"
)
  header.header(
    style="background: rgba(0,0,0,0);"
  )
    Header
  q-page-container.pagina
    router-view
</template>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1240px;
  height: 100vh;
}

.header {
  margin: 0 auto;
  max-width: 1240px;
  padding: 20px 0px;
}

.pagina {
  height: 80vh;
}

@media screen and (max-width:1248px) {
  .container {
    padding: 0px 20px;
  }
}

</style>
