<template>
  <div class="poke-wiki">
    <poke-dex></poke-dex>
  </div>
</template>

<script>
import PokeDex from "../components/PokeDex.vue";

export default {
  name: "PokeWiki",
  components: {
    PokeDex,
  },
};
</script>

<style scoped></style>
