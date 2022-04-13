<template>
  <div class="v-container">
    <span v-if="hackerNewsData === 'error'">{{ hackerNewsData }}</span>
    <table v-else class="">
      <thead>
        <tr>
          <th
            :class="column.field"
            v-for="(column, index) in collection"
            :key="index"
          >
            {{ column.header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="" v-for="(item, index) in hackerNewsData" :key="index">
          <td
            :class="column.field"
            v-for="(column, index) in collection"
            :key="index"
          >
            <p v-if="column.field === 'url'">
              <a :href="item.url" target="_blank">
                {{ item.url }}
              </a>
            </p>
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
  props: {
    hackerNewsData: {
      type: Array,
      default: () => [],
    },
  },
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
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  table-layout: auto;
}

th {
  font-weight: 900;
}

:is(th, td) {
  padding: 0.5em;
}

:is(table, th, td) {
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.author {
  width: 20px;
}

.url p {
  margin: 0;
  width: 500px;
  overflow:hidden;
  white-space:nowrap;
  text-overflow: ellipsis;
}

tr:hover {
  background-color: rgb(247, 248, 248);
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
    table-layout: fixed;
  }

  .url p {
    width: unset;
  }

  table thead {
    display: none;
  }

  table tr {
    margin-bottom: 1rem;
    border-bottom: 2px solid #42b983;
  }

  table :is(tr, td) {
    display: block;
  }
}
</style>
