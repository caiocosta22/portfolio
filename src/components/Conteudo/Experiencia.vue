<script setup>
import { ref } from "vue";

const jobs = ref([
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
    tempo: "10/2023 - Atuando"
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
      q-separator(
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

p, h6 {
  padding: 0px;
  margin: 0px
}

span {
  padding-left: 20px;
}

.box {
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  margin-bottom: 25px;
  border: 1px solid #000;
  position: relative;
}

.box::before{
  content: "";
  position: absolute;
  z-index: -1;
  background-color: var(--orange-dark);
  border-radius: 20px;
  border: 1px solid #000;
  width: 101%;
  height: 105%;
  left: -15px;
  top: 5px;
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
</style>
