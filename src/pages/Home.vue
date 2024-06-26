<script setup>
import { computed } from "vue";
import { useMenuStore } from "src/stores/menu-store.js";
import { Titulo, Menu, Sociais, Sobre, Experiencia, Projetos, Formacao, Slider } from "src/router/index.js";

const menuStore = useMenuStore();
const menuAtual = computed(() => { return menuStore.menuAtual; });
</script>

<template lang="pug">
section.principal
  section.lateral
    Titulo
    Menu.desktop
    Sociais
  section.conteudo.desktop
    Sobre(
      v-if="menuAtual === 1 "
    )
    Projetos(
      v-if="menuAtual === 2 "
    )
    Experiencia(
      v-if="menuAtual === 3 "
    )
    Formacao(
      v-if="menuAtual === 4 "
    )
  section.mobile
    article
      Sobre
    article
      h2.area Projetos
      Slider
    article
      h2.area Experiência
      Experiencia
    article
      h2.area Formação
      Formacao

</template>

<style scoped>
.principal {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 150px;
  height: 80vh;
}

.lateral {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 80vh;
}

.mobile {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
}

.area {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 5px;
}

@media screen and (max-width:1080px) {
  .lateral {
    justify-content:inherit
  }

  .desktop {
    display: none;
  }

  .principal {
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 0px
  }

}

@media screen and (min-width:1080px) {
  .mobile {
    display: none;
  }
}
</style>
