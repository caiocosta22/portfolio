<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar();

const toggle = ref($q.dark.isActive);

const icones = ref([
  {
    name: "fa-brands fa-github"
  }, {
    name: "fa-brands fa-linkedin"
  }, {
    name: "fa-solid fa-envelope"
  }
]);

const iconColor = computed(() => {
  return toggle.value ? "primary" : "secondary";
});

</script>

<template lang="pug">
div.flex
  q-icon.icons(
    v-for="icon in icones"
    :key="icon"
    :name="icon.name"
    size="md"
    :color="iconColor"
  )
</template>

<style scoped>
.flex {
  gap: 10px
}
.icons {
  cursor:pointer
}
.icons:hover {
  transform: scale(1.3);
  transition: ease-in-out 0.3s;
}
</style>
