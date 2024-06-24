<script setup>
import { ref } from "vue";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/style.css";
const projetos = ref([
  {
    titulo: "",
    descricao: "",
    imagem: "",
    icons: [
      "fa-brands fa-vuejs",
      ""
    ],
    link: ""
  },
  {
    titulo: "",
    descricao: "",
    imagem: "",
    icons: [
      "fa-brands fa-vuejs",
      ""
    ],
    link: ""
  },
  {
    titulo: "",
    descricao: "",
    imagem: "",
    icons: [
      "fa-brands fa-vuejs",
      ""
    ],
    link: ""
  },
  {
    titulo: "",
    descricao: "",
    imagem: "",
    icons: [
      "fa-brands fa-vuejs",
      ""
    ],
    link: ""
  }
]);
</script>

<template lang="pug">
PerfectScrollbar
  div.grid
    div.box(
      v-for="projeto in projetos"
      :key="projeto"
    )
      div.menu
        h6 {{ projeto.titulo }}
        q-icon.botao(
          name="fa-solid fa-expand"
        )
      p {{ projeto.descricao }}
      p imagem do projeto
      div.icones
        q-icon(
          v-for="icon in projeto.icons"
          :key="icon"
          :name="icon"
          color="info"
          size="sm"
        )
      p.text-info <b> {{ projeto.link }} </b>
</template>

<style scoped>
* {
  line-height: 1.0;
  font-size: 1.0rem;
  line-height: 1.25;
}

p, h6 {
  margin: 0px;
}

.ps {
  height: 670px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
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
  width: 90%;
  margin: 0 auto
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

.box:hover::before {
  transform: translate(-6px, 6px);
}

.menu {
  display: flex;
  flex-direction:row;
  justify-content: space-between;
}

.botao {
  padding: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.botao:hover {
  transform: scale(1.3);
}

@media screen and (max-width: 1240px) {
  .ps {
    height: 550px;
  }
}

@media screen and (max-height: 800px) {
  .ps {
    height: 440px;
  }
}
</style>
