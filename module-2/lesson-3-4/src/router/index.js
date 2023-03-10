import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import About from "../views/About/About.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
  ],
});
export default router;
