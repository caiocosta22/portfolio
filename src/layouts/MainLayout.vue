<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import Header from "src/components/Header/Header.vue";

const isButtonVisible = ref(false);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  isButtonVisible.value = window.scrollY !== 0;
};

const scrollTop = () => {
  window.scrollTo(
    {
      top: 0,
      behavior: "smooth"
    })
  ;
};
</script>

<template lang="pug">
q-layout.container(
  view="hHh lpr fff"
)
  header.header(
    style="background: rgba(0,0,0,0);"
  )
    Header
  q-page-container.pagina
    router-view
  q-btn.floating-button2(
    color="info"
    position="bottom-right"
    @click="scrollTop"
    align="right"
    v-if="isButtonVisible"
    size="sm"
  )
    q-icon(
      name="arrow_upward"
    )
</template>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1240px;
  height: 100vh;
}

.header {
  margin: 0 auto;
  max-width: 1240px;
  padding: 20px 0px;
}

.pagina {
  height: 80vh;
}

.floating-button2 {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 9999;
  border: 1px solid black;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  align-items: center;
}

@media screen and (max-width:1248px) {
  .container {
    padding: 0px 20px;
  }
}

@media screen and (max-width:1080px) {
  .floating-button2 {
    display: none;
  }
}

</style>
