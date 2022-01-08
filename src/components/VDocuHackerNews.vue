<template>
  <div class="v-container">
    <v-docu-table v-bind:data="hackerNewsData"></v-docu-table>
  </div>
</template>

<script>
import VDocuTable from "../components/common/VDocuTable.vue";

export default {
  name: "VDocuHackerNews",
  components: {
    VDocuTable,
  },
  data: () => ({
    hackerNewsData: [],
    url: "https://hn.algolia.com/api/v1/search?",
    search: "covid",
    page: 0,
    hitsPerPage: 20,
  }),
  methods: {},
  created() {
    fetch(
      `${this.url}query=${this.search}&page=${this.page}&hitsPerPage=${this.hitsPerPage}`,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((articles) => {
        console.log(articles.hits);
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
          .forEach((article) => this.hackerNewsData.push(article));
      });
  },
};
</script>

<style></style>
