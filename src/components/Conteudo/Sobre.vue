<script setup>
import { ref } from "vue";

const pdf = ref("https://drive.google.com/file/d/1qxR7NSKlZjife6NjfLk45asSQuHpPes3/view?usp=sharing");
</script>

<template lang="pug">
div
  div(
    id="mobile"
  )
    p Como em uma clássica história de desenvolvedor de   software, minha paixão nasceu ainda na infância, repleta  de novas tecnologias, despertando a aspiração de, um   dia, poder trabalhar com isso. Sempre fui encantado por   <b>interfaces limpas e interativas </b>, suas   construções e as sensações que provocam no usuário.   Assim, meu principal objetivo é transmitir essa   experiência nos meus produtos.
  p Já trabalhei em projetos de pequeno e grande porte, como  <b>landing pages, hotsites e e-commerce</b>, para uma  ampla gama de empresas, como <b>distribuidoras, lojistas,  incorporadoras e construtoras</b>. Nesses projetos,  utilizei a tecnologia <b>Vue 3</b>, junto com o <b>Quasar  Framework</b>, <b>Figma Design</b> para criação de   protótipos e o método <b>KANBAN</b> como workflow.
  p Tenho 22 anos, estou cursando <b>Análise e  Desenvolvimento de Sistemas</b>, estudo <b>React com   Typescript</b> pela plataforma Origamid e participo do  programa <b>Santander Coders 2024</b>, na trilha de  Front-End, para ampliar meus conhecimentos em Angular.
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
