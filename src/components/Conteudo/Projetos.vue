<script setup>
import { ref } from "vue";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/style.css";
const projetos = ref([
  {
    titulo: "Portfólio",
    descricao: "Projeto pessoal com foco em apresentar minha identidade visual de forma simples.",
    imagem: "/images/projetos/portfolio.png",
    icons: [
      "fa-brands fa-vuejs",
      "fa-brands fa-sass",
      "fa-brands fa-figma"
    ],
    link: "https://github.com/caiocosta22/portfolio"
  },
  {
    titulo: "Sistema Catálogo",
    descricao: "Sendo desevenvolvido para automatizar artes de catálogos de produtos para Agência Alastrar.",
    imagem: "/images/projetos/sistemacatalogo.png",
    icons: [
      "fa-brands fa-vuejs",
      "fa-brands fa-node-js",
      "fa-solid fa-database"
    ],
    link: ""
  },
  {
    titulo: "Super Academy",
    descricao: "Landing Page promocional de eventos da empresa Super Supply com foco na venda de ingressos.",
    imagem: "/images/projetos/superacademy.png",
    icons: [
      "fa-brands fa-vuejs",
      "fa-brands fa-sass",
      "fa-brands fa-figma"
    ],
    link: "https://superacademy.supersupply.com.br"
  },
  {
    titulo: "Galeam Incorporadora",
    descricao: "Site institucional da incorporadora, com foco em apresentar a empresa e seus principais projetos.",
    imagem: "/images/projetos/galeam.png",
    icons: [
      "fa-brands fa-vuejs",
      "fa-brands fa-sass"
    ],
    link: "http://galeamgroup.com"
  },
  {
    titulo: "Super Supply",
    descricao: "Landing page institucional da distribuidora Super Supply, com foco em apresentar suas soluções e serviços para B2B.",
    imagem: "/images/projetos/supersupply.png",
    icons: [
      "fa-brands fa-vuejs"
    ],
    link: "https://supersupply.com.br"
  },
  {
    titulo: "Web Form",
    descricao: "Pequeno protótipo de estudo de HTML e CSS proposto pelo programa Santander Coders 2024.",
    imagem: "/images/projetos/weform.png",
    icons: [
      "fa-brands fa-html5",
      "fa-brands fa-css3-alt"
    ],
    link: "https://github.com/caiocosta22/webform-frontend"
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
      div.imagem
        img(
          :src="projeto.imagem"
        )
      div.icones
        q-icon(
          v-for="icon in projeto.icons"
          :key="icon"
          :name="icon"
          color="info"
          size="sm"
        )
      a.link(
        :href="projeto.link"
        target="_blank"
      ) {{ projeto.link }}
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

p {
  font-size: 0.9rem;
}

.link {
  font-size: 0.8rem;
  font-weight: 500;
  color: #141414;
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
  margin: 0 auto;
  transition: 0.3s ease-in-out;
  margin-bottom: 10px;
}

.box::before{
  content: "";
  position: absolute;
  z-index: -1;
  background-color: var(--orange-dark);
  border-radius: 20px;
  border: 1px solid #000;
  width: 100.5%;
  height: 103%;
  left: -8px;
  top: 1px;
  transform: translate(0, 0);
  transition: transform 0.3s ease-in-out;
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

.icones {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

img {
  border-radius: 15px;
  border: 1px solid rgba(0,0,0,0.7);
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
