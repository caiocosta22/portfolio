<script setup>
import { ref } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const settings = ref({
  itemsToShow: 2,
  snapAlign: "start",
  wrapAround: true,
  autoplay: 2000
});

const breakpoints = ref({
  268: {
    itemsToShow: 1.0,
    snapAlign: "start"
  },
  768: {
    itemsToShow: 2.0,
    snapAlign: "start"
  },
  1080: {
    itemsToShow: 2.0,
    snapAlign: "start"
  }
});

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
    texto: "<p>Esse projeto tem um intuito de resolver uma problemática constante dentro da agência, que é a produção massiva de catálogos ser feito de forma manual.</p> <p>Catálogos de produtos são essenciais para nossos clientes, e fazer página por página de um catálogo, de centenas de páginas é um trabalho sobrehumano. </p> <p>Pra isso, decidi criar um sistema do zero com backend em NODE que será responsável, por capturar os produtos no banco de dados do cliente, e enviar em formato JSON para o front-end ler, e produzir uma lista estilizada da maneira que o cliente precisa, assim otimizando completamente o processo de criação dessas artes.</p>"
  },
  {
    id: 3,
    titulo: "Super Academy",
    texto: "<p>Aqui foi criada uma landing page para capturar clientes para um evento que vai acontecer em julho de 2024.</p><p> Fui responsável pela idealização, design e desenvolvimento completo da landing page, além de ter exercitado um conhecimento em relações a dominios e DNS. Pois, tive de criar um subdomínio no portal de hospedagem do cliente, e associar ao deploy da aplicação.</p><p>Trafego pago é extremamente eficiente para capturar pessoas para esses eventos, porém, uma landing page bem construída com um design sólido passa uma sensação de profissionalismo e permite apresentar o que será mostrado no evento para o visitante, assim funcionando de maneira mais efetiva para esse objetivo.</p>"
  },
  {
    id: 4,
    titulo: "Galeam Incorporadora",
    texto: "<p>Ironicamente, foi um dos projetos mais desafiadores que trabalhei, por conta da quantidade massiva de fotos e vídeos que foram enviadas pelo time de Design do cliente.</p> <p>Ter que aliar o desempenho da aplicação, com fotos e vídeos pesados foi um grande desafio de otimização que tive de passar para construir esse site, já que todo o Design foi projetado pelo time do cliente.</p> <p>Aqui aprendi muito sobre como funciona o Web Design Europeu, pois tive a oportunidade de trabalhar com um time que se localizava na Espanha, me comunicando em inglês com eles.</p>"
  },
  {
    id: 5,
    titulo: "Super Supply",
    texto: "<p>O primeiro projeto que desenvolvi para a Agência Alastrar, definitivamente, foi um divisor de águas pra mim.</p> <p>Por os estudos em prática foi bem mais difícil do que parece, apesar de ser uma simples landing page, tenho bastante carinho por esse projeto, já que foi minha primeira vez trabalhando aliado com um time de Design.</p>"
  },
  {
    id: 6,
    titulo: "Web Form",
    texto: "<p>Um simples projeto de estudo de HTML e CSS pra exercitar um pouco do que aprendi no programa. Gosto bastante dessa ilustração utilizada, e das cores que decidimos por na página, dão um toque muito confortável.</p> <p>Não apliquei javascript no projeto, já que não era necessário para finalização da task.</p>"
  }
]);

const filterDialog = (id) => {
  dialogAtual.value = dialogs.value.filter((objeto) => objeto.id === id);
};

const dialogAtual = ref();
</script>

<template lang="pug">
div.container
  carousel(
    v-bind="settings"
    :breakpoints="breakpoints"
  )
    Slide(
      v-for="projeto in projetos"
      :key="projeto"
    )
      div.container-box
        div.box
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
    template(#addons)
      Pagination
</template>

<style scoped>
* {
  line-height: 1.0;
  font-size: 1.0rem;
  line-height: 1.25;
  --vc-pgn-width: 10px;
  --vc-pgn-height: 10px;
  --vc-pgn-border-radius: 20px;
  --vc-pgn-background-color: grey;
  --vc-pgn-active-color: var(--orange-dark);
}

.container {
  height: 100%;
  border-radius: 15px;
  box-sizing: border-box;
  overflow: none
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

.container-box {
  width: 100%;
  height: 100%;
  padding: 15px 10px;
}

.box {
  background-color: #fff;
  border: 1px solid #000;
  color: #141414;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  justify-content: space-between;
  height: 100%;
  gap: 10px;
  text-align: start
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
  max-width: 100%;
  max-height: 100%;
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
