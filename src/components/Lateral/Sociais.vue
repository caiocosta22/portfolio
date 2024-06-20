<script setup>
import { ref } from "vue";

const icones = ref([
  {
    name: "fa-brands fa-github",
    link: "https://github.com/caiocosta22"
  }, {
    name: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/caiocosta22/"
  }
]);

</script>

<template lang="pug">
div.flex
  a(
    v-for="icon in icones"
    :key="icon"
    :href="icon.link"
    target="_blank"
  )
    q-icon.icons(
      :name="icon.name"
      color="info"
      size="md"
    )
</template>

<style scoped>
.flex {
  gap: 15px
}

.icons {
  cursor: pointer;
  transition: ease-in-out 0.3s;
}

.icons:hover {
  transform: scale(1.3);
}
</style>
