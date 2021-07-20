<template>
  <div class="content">
    <table class="table">
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
      </tr>
      <tr v-for="(item, i) in table" v-bind:key="i">
        <td>{{ i + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.surname }}</td>
        <td>{{ item.age }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ComponentTable",
  data: () => ({
    table: [
      { name: "Yuriy", surname: "Mraka", age: 28 },
      { name: "Esther", surname: "Morales", age: 26 },
      { name: "Marta", surname: "Morales", age: 32 },
    ],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table {
  margin: auto;
}
</style>
