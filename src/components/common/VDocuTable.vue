<template>
  <div class="v-container">
    <table class="">
      <thead>
        <tr>
          <th v-for="(column, index) in collection" :key="index">
            {{ column.header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td v-for="(column, index) in collection" :key="index">
            <a v-if="column.field === 'url'" :href="item.url" target="_blank">{{
              item.url
            }}</a>
            <span v-else>{{ item[column.field] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "VDocuTable",
  props: ["data"],
  data: () => ({
    collection: [
      { header: "Author", field: "author" },
      { header: "Title", field: "title" },
      { header: "Link", field: "url" },
      { header: "Comments", field: "num_comments" },
      { header: "Date", field: "created_at" },
    ],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table {
  margin: auto;
}
td {
  text-align: left;
}
</style>
