<template>
  <div class="content">
    <custom-spinner id="spinner"></custom-spinner>
    <div class="group" v-show="!showSpinner">
      <div
        class="card"
        v-for="(pokemon, index) in pokemons"
        :key="index"
        @click="openPokemonDetail(pokemon)"
      >
        <p>{{ pokemon.species.name }}</p>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.species.name" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomSpinner from "./common/CustomSpinner.vue";

export default {
  name: "PokeDex",
  components: {
    CustomSpinner,
  },
  data: () => ({
    pokemons: [],
    temporalPokemons: [],
    showSpinner: true,
  }),
  methods: {
    openPokemonDetail: function (pokemon) {
      this.$router.push({ name: "pokemon", params: pokemon });
    },
  },
  created() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((allpokemon) => {
        allpokemon.results.forEach((pokemon) => {
          fetch(pokemon.url)
            .then((response) => response.json())
            .then((pokemonData) => {
              this.pokemons.push(pokemonData);
              setTimeout(() => {
                this.$el.querySelector("#spinner").classList.remove("show");
                this.showSpinner = false;
              }, 1000);
            });
        });
      });
  },
};
</script>

<style scoped lang="scss">
img {
  width: 100px;
}

.group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  max-width: 25%;
}
</style>
