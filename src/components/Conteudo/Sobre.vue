<script setup>
import { ref } from "vue";

const pdf = ref("https://docs.google.com/document/d/1X-PCGHhxWwtEVgC3lWNfyQ9qOjCircTbiqtMxvehFLA/edit?usp=sharing");
</script>

<template lang="pug">
div
  div(
    id="mobile"
  )
  p Minha jornada na tecnologia começou cedo, movida pela curiosidade e pelo desejo de criar soluções interativas e eficientes. Sempre fui fascinado por <b>interfaces limpas e intuitivas</b>, que proporcionam boas experiências aos usuários. Hoje, meu foco é desenvolver aplicações que unam <b>usabilidade, performance e automação</b> para otimizar processos e melhorar a produtividade.
  p Possuo experiência em projetos de diferentes escalas, desde <b>landing pages e hotsites</b> até <b>sistemas internos e automações</b>. Já atuei com <b>Vue 3, Quasar Framework, Node.js, Fastify e SQL Server</b>, além de utilizar <b>Python, Selenium e Pandas</b> para automação de tarefas. Também trabalho com <b>Figma</b> para prototipação e aplico metodologias ágeis, como <b>Scrum</b>, para garantir eficiência no fluxo de desenvolvimento.

  a(
    download="CurriculoCaioCosta.pdf"
    :href="pdf"
    target="_blank"
    alt="Currículo"
  )
    q-btn(
      color="info"
      style="border-radius:20px; border:1px solid #141414;  box-shadow:none"
    )
      span Download CV
</template>

<style scoped>
p {
  font-size: 1rem;
  font-weight: regular;
}
@media screen and (max-width:1080px) {
  #mobile {
    display: none
  }
}
</style>
