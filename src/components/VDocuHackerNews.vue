<template>
  <div class="v-container">
    <custom-spinner id="spinner"></custom-spinner>
    <custom-searcher>
      <img :src="cactus.src" :alt="cactus.alt" />
    </custom-searcher>
    <v-docu-table
      v-show="!isSpinnerVisible"
      v-bind:hackerNewsData="hackerNewsData"
    ></v-docu-table>
  </div>
</template>

<script>
import VDocuTable from "../components/common/VDocuTable.vue";
import CustomSpinner from "./common/CustomSpinner.vue";
import CustomSearcher from "../components/common/CustomSearcher.vue";
// https://www.svgrepo.com/svg/415304/cactus-furniture-nature-16
import cactus from "@/assets/cactus.svg";

export default {
  name: "VDocuHackerNews",
  components: {
    VDocuTable,
    CustomSpinner,
    CustomSearcher,
  },
  data: () => ({
    hackerNewsData: [],
    temporalData: [],
    url: "https://hn.algolia.com/api/v1/search?",
    search: "covid",
    page: 0,
    hitsPerPage: 20,
    isSpinnerVisible: true,
    cactus: {
      src: cactus,
      alt: "cactus",
    },
  }),
  methods: {},
  created() {
    fetch(
      `${this.url}query=${this.search}&page=${this.page}&hitsPerPage=${this.hitsPerPage}`,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((articles) => {
        console.table(articles.hits);
        articles.hits
          .map((article) => {
            return {
              author: article.author,
              title: article.title,
              url: article.url,
              num_comments: article.num_comments,
              created_at: new Date(article.created_at).toLocaleString(),
            };
          })
          .forEach((article) => {
            this.hackerNewsData.push(article);
            this.$el.querySelector("#spinner").classList.remove("show");
            this.isSpinnerVisible = false;
          });
      })
      .catch(() => {
        this.hackerNewsData = "error";
        this.$el.querySelector("#spinner").classList.remove("show");
        this.isSpinnerVisible = false;
      });
  },
  mounted() {
    console.log("MOUNTED");
  },
  updated() {
    console.log("UPDATED");
  },
};
</script>

<style></style>
