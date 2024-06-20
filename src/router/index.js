import { route } from "quasar/wrappers";
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from "vue-router";
import routes from "./routes";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === "history" ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
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

export { Titulo, Menu, Sociais, Sobre, Experiencia };
