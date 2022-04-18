<template>
  <div class="content">
    <p v-color="'#42b983'" v-if="!condition">{{ miVariable }}</p>
    <p v-else>Esta frase no se va a mostrar</p>
  </div>
</template>

<script>
export default {
  name: "MiComponente",
  data: () => ({
    miVariable: "Mi primer componente con Vue :)",
    condition: false,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
