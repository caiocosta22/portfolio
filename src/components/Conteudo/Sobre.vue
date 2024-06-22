<script setup>
import { ref } from "vue";

const pdf = ref("https://drive.google.com/file/d/103eyPu_UzIym3jMrR73-DmYe7TZtzyMQ/view?usp=sharing");
</script>

<template lang="pug">
p Como em uma clássica história de desenvolvedor de software, minha paixão nasceu ainda na infância, repleta de novas tecnologias, despertando a aspiração de, um dia, poder trabalhar com isso. Sempre fui encantado por interfaces limpas, suas construções e as sensações que provocam no usuário. Assim, meu principal objetivo é transmitir essa experiência nos meus produtos.
p Já trabalhei em projetos de pequeno e grande porte, como landing pages, hotsites e e-commerce, para uma ampla gama de empresas, como distribuidoras, lojistas, incorporadoras e construtoras. Nesses projetos, utilizei a tecnologia Vue 3, junto com o Quasar Framework, Figma Design para criação de protótipos e o método KANBAN como workflow.
p Tenho 22 anos, estou cursando Análise e Desenvolvimento de Sistemas, estudo React com Typescript pela plataforma Origamid e participo do programa Santander Coders 2024, na trilha de Front-End, para ampliar meus conhecimentos em Angular.
a(
  download="CurriculoCaioCosta.pdf"
  :href="pdf"
  target="_blank"
  alt="Currículo"
)
  q-btn(
    color="info"
    style="border-radius:20px; border:1px solid   #141414; box-shadow:none"
  )
    span Download CV
</template>

<style scoped>
p {
  font-size: 1rem;
  font-weight: regular;
}
</style>
