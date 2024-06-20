import { route } from "quasar/wrappers";
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from "vue-router";
import routes from "./routes";

export default route(function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === "history" ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE)
  });

  return Router;
});

// Importações de Componentes

// Menu Lateral
import Titulo from "src/components/Lateral/Titulo.vue";
import Menu from "src/components/Lateral/Menu.vue";
import Sociais from "src/components/Lateral/Sociais.vue";
// Conteudo Principal
import Sobre from "src/components/Conteudo/Sobre.vue";
import Experiencia from "src/components/Conteudo/Experiencia.vue";
import Projetos from "src/components/Conteudo/Projetos.vue";
import Formacao from "src/components/Conteudo/Formacao.vue";

export { Titulo, Menu, Sociais, Sobre, Experiencia, Projetos, Formacao };
