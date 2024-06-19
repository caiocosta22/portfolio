<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const toggle = ref($q.dark.isActive);

const switchTeme = () => {
  $q.dark.toggle();
};

const iconColor = computed(() => {
  return toggle.value ? "primary" : "secondary";
});

const logo = computed(() => {
  return toggle.value ? "/images/logo-branca.svg" : "/images/logo.svg";
});

</script>

<template lang="pug">
div.header
  img(
    :src="logo"
  )
  div.icons
    q-icon(
      name="fa-solid fa-sun"
      :color="iconColor"
    )
    q-toggle(
      v-model="toggle"
      @click="switchTeme()"
      :color="iconColor"
    )
    q-icon(
      name="fa-solid fa-moon"
      :color="iconColor"
    )
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 60px 40px;
  align-items: center;
}

.icons {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center
}

@media (min-width:1001px) {
  nav {
    display: none;
  }
}

@media (max-width:1000px) {
  .header {
    padding: 30px 20px;
  }
}
</style>
