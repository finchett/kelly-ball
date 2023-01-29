import { createApp } from "vue";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import App from "./App.vue";
import Home from "./views/home-view.vue";
import Play from "./views/play-view.vue";
import "./assets/main.css";

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
  // Github pages is only compatible with web hash history
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
