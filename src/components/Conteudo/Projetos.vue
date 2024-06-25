<script setup>
import { ref } from "vue";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/style.css";
const projetos = ref([
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
    titulo: "Super Supply",
    descricao: "Landing page institucional da distribuidora Super Supply, com foco em apresentar suas soluções e serviços para B2B.",
    imagem: "/images/projetos/supersupply.png",
    icons: [
      "fa-brands fa-vuejs"
    ],
    link: "https://supersupply.com.br"
  },
  {
    id: 6,
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

const dialog = ref(false);
const dialogs = ref([
  {
    id: 1,
    titulo: "Portfólio",
    texto: "<p> Em termos de Design, meu principal objetivo foi mostrar pro usuário minha identidade visual como nunca pude trabalhar em outros projetos antes. Por conta disso, utilizei tantas bordas pretas ao redor dos elementos de forma arrendoda, pra trazer uma sensação lúdica e confortável, amo ilustrações, e cartoons dos anos 30, eles carregam esse traço preto em volta dos personagens bem forte que quis adaptar para o projeto de alguma forma. </p> <img src='/images/projetos/cartoons.png' /> <p> <br> Outro grande desafio, com certeza foram as cores, passei horas no figma prototipando cores, principalmente, quando se trata de modo escuro, o modo claro sempre foi fácil de visualizar, por conta da minha paixão por tons pastéis, mas o escuro, foi um grande desafio que com certeza me levou muitas horas.</p> <img src='/images/projetos/cores.png' /> <br> <p> Quando chegamos no desenvolvimento, quis utilizar a componentização que o Vue me permite pra mostrar um pouco das minhas skills além da estilização, como os dialogos abertos ao clicar nos cards, o menu lateral reativo para gerar uma renderização dinâmica dos conteúdos, a utilização de um componente de scroll area para permitir o usuário explorar o conteúdo sem sair do foco do site, assim explorando um pouquinho do que aprendi nesse meu tempo como desenvolvedor front-end. </p>"
  },
  {
    id: 2,
    titulo: "Sistema Catálogo",
    texto: "lorem ipsum"
  },
  {
    id: 3,
    titulo: "Super Academy",
    texto: "lorem ipsum"
  },
  {
    id: 4,
    titulo: "Galeam Incorporadora",
    texto: "lorem ipsum"
  },
  {
    id: 5,
    titulo: "Super Supply",
    texto: "lorem ipsum"
  },
  {
    id: 6,
    titulo: "Web Form",
    texto: "lorem ipsum"
  }
]);
const filterDialog = (id) => {
  dialogAtual.value = dialogs.value.filter((objeto) => objeto.id === id);
};
const dialogAtual = ref();
</script>

<template lang="pug">
div.container
  PerfectScrollbar.scroll
    div.grid
      div.box(
        v-for="projeto in projetos"
        :key="projeto"
      )
        div.menu
          h6 {{ projeto.titulo }}
          q-icon.botao(
            name="fa-solid fa-expand"
            @click="dialog = !dialog, filterDialog(projeto.id)"
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
  q-dialog(
    v-model="dialog"
    backdrop-filter="blur(4px) saturate(150%)"
  )
    q-card.dialog
      q-card-section.row.items-center
        h3 {{ dialogAtual[0].titulo }}
        q-space
        q-btn(
          icon="close"
          flat
          round
          dense
          v-close-popup
        )
      q-card-section
        p(
          v-html="dialogAtual[0].texto"
        )
</template>

<style scoped>
* {
  line-height: 1.0;
  font-size: 1.0rem;
  line-height: 1.25;
}

.container {
  height: 80vh;
  border: 1px solid #000;
  border-radius: 15px;
  box-sizing: border-box;
}

.ps {
  height: 100%;
  width: 98%;
  margin: 0 auto;
  padding: 20px 0px;
}

p, h6, h3 {
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

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 0px 15px;
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
  width: 100%;
  transition: 0.3s ease-in-out;

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

.box:hover::before{
  transform: translate(-6px,6px);
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

.dialog {
  width: 440px;
  height: 640px;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
}

</style>
