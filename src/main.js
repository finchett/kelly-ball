import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import Home from "./views/home-view.vue";
import Play from "./views/play-view.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/play",
    name: "Play",
    component: Play,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
