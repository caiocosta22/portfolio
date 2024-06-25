<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const toggle = ref($q.dark.isActive);

const switchTeme = () => {
  $q.dark.toggle();
};

const menus = ref([
  {
    menu: "sobre",
    link: ""
  },
  {
    menu: "experiência",
    link: ""
  },
  {
    menu: "projetos",
    link: ""
  },
  {
    menu: "formação",
    link: ""
  }
]);

const drawer = ref(false);

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
    alt="Caio Costa"
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
  div.hamburger
    q-icon(
      name="fa-solid fa-bars"
      :color="iconColor"
      size="xs"
      @click="drawer = !drawer"
      round
      dense
    )
div.menu
  q-drawer(
    behavior="mobile"
    v-model="drawer"
    :width="200"
    :breakpoint="1080"
    bordered
    elevated
    side="right"
  )
    q-scroll-area(
      class="fit"
    )
      q-list
        q-separator
        template(
          v-for="item in menus"
          :key="item"
        )
          q-item(
            clickable :active="item.menu === 'Outbox'" v-ripple
          )
            q-item-section.texto(
              style="padding-left: 0; padding-top: 0; text-align: center;"
              @click="goTo(item.link)"
            ) {{ item.menu }}
          q-separator
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icons {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center
}

.hamburger {
  display: flex;
  align-items: center;
  padding: 15px 10px 10px 10px
}

@media screen and (min-width:1080px) {
  .hamburger {
    display: none;
  }

  .menu {
    display: none;
  }
}

@media screen and (max-width:1080px) {
  .icons {
    display: none;
  }

  img {
    max-width: 70%;
  }
}
</style>
