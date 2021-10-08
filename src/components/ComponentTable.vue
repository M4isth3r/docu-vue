<template>
  <div class="content">
    <table class="table">
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Descripción</th>
      </tr>
      <tr v-for="(cosa, i) in coleccion" v-bind:key="i">
        <td>{{ i }}</td>
        <td>{{ cosa.name }}</td>
        <td>{{ cosa.description }}</td>
        <span v-for="(child, j) in cosa.children" :key="j">
          {{ child }}
        </span>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ComponentTable",
  data: () => ({
    coleccion: [
      {
        name: "Zeus",
        description: "Dios del Cielo y Soberano del Olimpo",
        children: [1, 3, 4],
      },
      {
        name: "Poseidón",
        description: "Dios de los mares y océanos",
        children: [1, 3, 4],
      },
      {
        name: "Hades",
        description: "Dios del inframundo",
        children: [1, 3, 4],
      },
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
