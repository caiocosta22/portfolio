<script setup>
import Header from "src/components/Header/Header.vue";
</script>

<template lang="pug">
q-layout.container(
  view="hHh lpr fff"
)
  q-header.container(
    style="background: rgba(0,0,0,0);"
  )
    Header
  q-page-container
    router-view
</template>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1200px;
}
</style>
