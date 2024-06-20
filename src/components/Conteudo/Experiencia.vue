<script setup>
import { ref } from "vue";

const jobs = ref([
  {
    empresa: "Agência Alastrar",
    titulo: "Desenvolvedor Fullstack",
    descricao: "",
    icons: [
      {
        name: ""
      }
    ],
    tempo: "10/2023 - Atuando"
  },
  {
    empresa: "G2 Sistemas",
    titulo: "Desenvolvedor Back-End",
    descricao: "",
    icons: [
      {
        name: ""
      }
    ],
    tempo: "07/2023 - 10/2023"
  },
  {
    empresa: "G2 Sistemas",
    titulo: "Estagiário de Suporte",
    subtitulo: "Analista de Suporte",
    descricao: "",
    icons: [
      {
        name: ""
      }
    ],
    tempo: "11/2021 - 07/2023"
  },
  {
    empresa: "Instituto Federal do Ceará",
    titulo: "Bolsista",
    descricao: "",
    icons: [
      {
        name: ""
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
      p {{ job.descricao }}
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
              size="md"
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
  margin-bottom: 20px
}

.grid {
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 20px
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
</style>
