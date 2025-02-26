<script setup>
import { ref } from "vue";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/style.css";
const jobs = ref([
  {
    empresa: "Hapvida NotreDame Intermédica",
    titulo: "Analista de Sistemas",
    descricao: "Responsável por revisar e implementar processos de automação com python, usando selenium, pandas e streamlit.<br> Arquitetar, desenvolver, testar e modelar sistemas fullstack visando aumento de produtividade do setor usando Vue3, Node, Fastfy, SQL SERVER e PM2 para deploy e monitoramento dos servidores.<br> Analisar e criar escalas para os gestores de todo o call center.",
    icons: [
      {
        name: "fa-brands fa-vuejs"
      },
      {
        name: "fa-brands fa-figma"
      },
      {
        name: "fa-brands fa-sass"
      },
      {
        name: "fa-brands fa-node-js"
      },
      {
        name: "fa-brands fa-python"
      },
      {
        name: "fa-solid fa-database"
      }
    ],
    tempo: "10/2024 - Atuando"
  },
  {
    empresa: "Agência Alastrar",
    titulo: "Desenvolvedor Fullstack",
    descricao: "Utilizando Vue 3 junto ao Quasar Framework para desenvolver landing pages e hotsites para empresas, criando e manipulando interfaces com o Figma Design, utilizando NODE para criar microsserviços que comuniquem-se ao front. Deploys para servidores FTP via GitHub Actions.",
    icons: [
      {
        name: "fa-brands fa-vuejs"
      },
      {
        name: "fa-brands fa-figma"
      },
      {
        name: "fa-brands fa-sass"
      },
      {
        name: "fa-brands fa-node-js"
      }
    ],
    tempo: "10/2023 - 10/2024"
  },
  {
    empresa: "G2 Sistemas",
    titulo: "Desenvolvedor Back-End",
    descricao: "Atuei refatorando códigos de microsserviços JAVA 8 para NODE, criando API REST para comunicação entre banco de dados e aplicações mobile voltada para entregas e vendas. Assim, também executando manutenção e otimização de Bancos de dados relacionais.",
    icons: [
      {
        name: "fa-brands fa-node-js"
      },
      {
        name: "fa-brands fa-java"
      },
      {
        name: "fa-solid fa-database"
      },
      {
        name: "fa-brands fa-git-alt"
      }
    ],
    tempo: "07/2023 - 10/2023"
  },
  {
    empresa: "G2 Sistemas",
    titulo: "Estagiário de Suporte",
    subtitulo: "Analista de Suporte",
    descricao: "<b>Estágio</b>: Prestei suporte helpdesk a sistemas ERP, CRM e PDV. Trabalhando com consultas e atualizações em bancos de dados relacionais (SQL SERVER e POSTGRES). <br> <b>Analista</b>: Trabalhei com bancos de dados relacionais em conjunto com power b.i para produzir relatórios para clientes. Além de ser responsável por testes de microsserviços em JAVA 8.",
    icons: [
      {
        name: "fa-solid fa-phone"
      },
      {
        name: "fa-solid fa-user"
      },
      {
        name: "fa-solid fa-database"
      },
      {
        name: "fa-solid fa-cloud"
      }
    ],
    tempo: "11/2021 - 07/2023"
  },
  {
    empresa: "Instituto Federal do Ceará",
    titulo: "Bolsista",
    descricao: "Atuação como técnico, responsável pela manutenção de computadores e vistoria  de sistemas do Campus desenvolvidos em PHP.",
    icons: [
      {
        name: "fa-solid fa-computer"
      },
      {
        name: "fa-solid fa-microchip"
      }
    ],
    tempo: "04/2019 - 08/2019"
  }
]);
</script>

<template lang="pug">
PerfectScrollbar
  div.container-box
    div.box(
      v-for="job in jobs"
      :key="job"
    )
      h6 {{ job.empresa }}
      div.grid
        div.textos
          p(
            v-html="job.descricao"
          )
        div.cargo
          q-separator.separator(
            vertical
            color="warning"
          )
          div.flex.column
            h6.titulo-cargo {{ job.titulo }} <br>
            h6.titulo-cargo(
              v-if="job.subtitulo"
            ) {{ job.subtitulo }}
            div.icones
              q-icon(
                v-for="icon in job.icons"
                :key="icon"
                :name="icon.name"
                size="sm"
                color="info"
              )
      span {{ job.tempo }} <br>
      span
</template>

<style scoped>

* {
  color: #141414;
  line-height: 1.25;
}

.ps {
  height: 90vh;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0px
}

p, h6 {
  padding: 0px;
  margin: 0px
}

span {
  padding-left: 20px;
}

.container-box {
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px 15px;
}

.box {
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  border: 1px solid #000;
  position: relative;
  margin: 0 auto;
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
  height: 105%;
  left: -8px;
  top: 1px;
  transform: translate(0, 0);
  transition: transform 0.3s ease-in-out;
}

.box:hover::before{
  transform: translate(-6px,6px);
}

.box>span {
  color: var(--orange-dark);
  font-weight: bold;
}

.grid {
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 20px;
  gap: 20px
}

.textos {
  display: flex;
  flex-direction: column;
  gap: 20px
}

h6 {
  font-size: 1.2rem;
  font-weight: 500;
  padding: 20px 0px 0px 20px;
}

.cargo {
  display: flex;
  gap: 15px
}

.titulo-cargo {
  padding: 0px;
  font-size: 1rem;
}

.icones {
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-top: 10px;
}

@media screen and (max-width: 768px) {
  .box:hover::before{
    transform: none;
  }
}

@media screen and (max-height:920px) {
  .ps {
    height: 88vh
  }
}

@media screen and (max-height:760px) {
  .ps {
    height: 85vh
  }
}

@media screen and (max-height:600px) {
  .ps {
    height: 82vh
  }
}

@media screen and (max-width: 1080px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 10px 20px
  }
  .separator {
    display: none;
  }
  h6 {
    font-size: 1.2rem;
    font-weight: 500;
    padding: 20px 0px 0px 20px;
  }
  .container-box{
    padding: 15px 10px;
  }
  .ps {
    padding: 0px;
    height: 100% !important;
  }
}
</style>
