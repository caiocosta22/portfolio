<script setup>
import { ref } from "vue";

const menus = ref([
  {
    tipo: "Graduação",
    titulo: "Ciência da Computação",
    local: "IFCE",
    tempo: "2019 - 2022 Cursado até o 5 semestre."
  },
  {
    tipo: "Tecnólogo",
    titulo: "Análise e Desenvolvimento de Sistemas",
    local: "Estácio",
    tempo: "2022 - Cursando"
  }
]);
</script>

<template lang="pug">
div.grid
  div.box(
    v-for="menu in menus"
    :key="menu"
  )
    p {{ menu.tipo }}
    p <b> {{ menu.titulo }} </b>
    p <b> {{menu.local}} </b>
    p.text-info <b> {{ menu.tempo }} </b>
div.lista
  div.flex.row
    q-icon(
      name="fa-solid fa-language"
      color="info"
    )
    p <b> Idiomas </b>
  div.flex.column
    p <b> Inglês </b> - Intermediário
    p <b> Português </b> - Nativo
</template>

<style scoped>
* {
  line-height: 1.0;
  font-size: 1.1rem;
  line-height: 1.25;
}

p {
  margin: 0px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  padding: 20px 15px
}

.box {
  background-color: #fff;
  border: 1px solid #000;
  color: #141414;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
}

.box::before{
  content: "";
  position: absolute;
  z-index: -1;
  background-color: var(--orange-dark);
  border-radius: 20px;
  border: 1px solid #000;
  width: 100.5%;
  height: 105%;
  left: -8px;
  top: 1px;
  transform: translate(0, 0);
  transition: transform 0.3s ease-in-out;
}

.box:hover::before{
  transform: translate(-6px,6px);
}

.lista {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 15px
}

.flex {
  gap: 10px;
}

@media screen and (max-width:1080px) {
  .grid {
    grid-template-columns: 1fr;
    padding: 15px 10px;
  }
}

@media screen and (max-width: 768px) {
  .box:hover::before{
    transform: none;
  }
}
</style>
