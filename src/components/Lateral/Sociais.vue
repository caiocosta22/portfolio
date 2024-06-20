<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar();

const toggle = ref($q.dark.isActive);

const icones = ref([
  {
    name: "fa-brands fa-github",
    link: "https://github.com/caiocosta22"
  }, {
    name: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/caiocosta22/"
  }
]);

const iconColor = computed(() => {
  return toggle.value ? "primary" : "secondary";
});

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
      size="md"
      :color="iconColor"
    )
</template>

<style scoped>
.flex {
  gap: 15px
}
.icons {
  cursor:pointer
}
.icons:hover {
  transform: scale(1.3);
  transition: ease-in-out 0.3s;
}
</style>
