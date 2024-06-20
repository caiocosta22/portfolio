<script setup>
import Header from "src/components/Header/Header.vue";
</script>

<template lang="pug">
q-layout.container(
  view="hHh lpr fff"
)
  q-header.header(
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
  height: 15%;
  padding-top: 40px;
}

.pagina {
  height: 85%;
}

@media screen and (max-width: 1240px) {
  .container {
    padding: 0px 40px;
  }
  .header {
    padding: 40px 20px
  }
}
</style>
