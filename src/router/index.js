import Vue from "vue";
import VueRouter from "vue-router";

// Pages
import Home from "../views/Home.vue";
import TodoList from "../views/TodoList.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import RouterDocu from "../views/RouterDocu.vue";
import PokeWiki from "../views/PokeWiki.vue";
import PokeDetail from "../views/PokeDetail.vue";
import HackerNews from "../views/HackerNews.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/hacker-news",
    name: "HackerNews",
    component: HackerNews,
  },
  {
    path: "/todo-list",
    name: "TodoList",
    component: TodoList,
  },
  {
    path: "/router-docu",
    name: "RouterDocu",
    component: RouterDocu,
  },
  {
    path: "/poke-wiki",
    name: "PokeWiki",
    component: PokeWiki,
  },
  {
    path: "/pokemon/:id",
    name: "pokemon",
    component: PokeDetail,
  },
  {
    path: "*",
    component: PageNotFound,
    alias: "404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
