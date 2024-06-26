<script setup>
import { ref, computed, nextTick } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const toggle = ref($q.dark.isActive);

const switchTeme = () => {
  $q.dark.toggle();
};

const menus = ref([
  {
    menu: "Sobre",
    link: "SOBRE"
  },
  {
    menu: "Experiência",
    link: "EXPERIENCIA"
  },
  {
    menu: "Projetos",
    link: "PROJETOS"
  },
  {
    menu: "Formação",
    link: "FORMACAO"
  }
]);

const drawer = ref(false);

const iconColor = computed(() => {
  return toggle.value ? "primary" : "secondary";
});

const logo = computed(() => {
  return toggle.value ? "/images/logo-branca.svg" : "/images/logo.svg";
});

const goTo = (sectionId) => {
  const section = document.getElementById(sectionId);
  console.log(section);
  drawer.value = !drawer.value;
  nextTick(() => {
    window.scrollTo({
      top: section.offsetTop - 10,
      behavior: "smooth"
    });
  });
};
</script>

<template lang="pug">
div.header
  img(
    :src="logo"
    alt="Caio Costa"
  )
  div.icons(
    id="desktop"
  )
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
    :width="220"
    :breakpoint="1080"
    bordered
    elevated
    side="right"
    :class="$q.dark.isActive ? 'bg-secondary' : 'bg-primary'"
  )
    q-scroll-area(
      class="fit"
    )
      q-list.lista-hamburger
        template(
          v-for="item in menus"
          :key="item"
        )
          q-item.item-hamburger(
            clickable
            :active="item.menu === 'Outbox'" v-ripple
            @click="goTo(item.link)"
          )
            q-item-section(
            ) {{ item.menu }}
        q-item
          q-item-section
            div.icons(
              id="#mobile"
            )
              q-icon(
                name="fa-solid fa-sun"
                :color="iconColor"
              )
              q-toggle(
                v-model="toggle"
                @click="switchTeme()"
                :color="iconColor"
                size="lg"
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

.lista-hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap:20px
}

.item-hamburger{
  width: 60%;
  padding: 8px;
  border: 1px solid black;
  border-radius: 20px;
  text-align: center;
  background-color: var(--orange-dark);
  color:#f2f0e4;
  font-weight: 500;
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
  #desktop {
    display: none;
  }

  img {
    max-width: 70%;
  }
}
</style>
