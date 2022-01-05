<template>
  <div class="poke-detail">
    <h1>{{ pokemonData.name }}</h1>
    <img
      class="pokemon-img"
      :src="pokemonData.sprites.front_default"
      :alt="pokemonData.name"
    />
    <img
      class="pokemon-img"
      :src="pokemonData.sprites.back_default"
      :alt="pokemonData.name"
    />
    <h3>Type</h3>
    <div class="type-content">
      <div v-for="(type, index) in pokemonTypes" :key="index">
        <img :src="type.img" alt="" />
        <p>{{ type.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { translateToSvg } from "../utils/pokemon-types-dictionary.js";

export default {
  name: "PokeDetail",
  components: {},
  data: () => ({
    pokemonData: {},
    pokemonTypes: [],
  }),
  methods: {
    getUrlSvg: function (path) {
      return require.context(path);
    },
  },
  created() {
    console.log(this.$route.params);
    this.pokemonData = this.$route.params;
    this.$route.params.types.forEach((pokemon) => {
      const pokemonInfo = {};
      const imgName = translateToSvg(pokemon.type.name);
      pokemonInfo.name = pokemon.type.name;
      pokemonInfo.img = require(`../assets/pokemon-type-icons/${imgName}.svg`);
      this.pokemonTypes.push(pokemonInfo);
    });
  },
};
</script>

<style scoped>
.poke-detail {
  width: 40%;
  margin: 0 auto;
}

.poke-detail .pokemon-img {
  width: 40%;
}

.type-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.type-content div {
  width: 25%;
}
</style>
