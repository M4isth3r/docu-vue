<template>
  <div class="content">
    <custom-spinner id="spinner"></custom-spinner>
    <custom-searcher
      @search-value="getData"
      @recharge-data="getAllPokemons"
      @submit-pressed="handleClick"
    ></custom-searcher>
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
import CustomSearcher from "../components/common/CustomSearcher.vue";

export default {
  name: "PokeDex",
  components: {
    CustomSpinner,
    CustomSearcher,
  },
  data: () => ({
    pokemons: [],
    persistPokemons: [],
    showSpinner: true,
  }),
  methods: {
    openPokemonDetail: function (pokemon) {
      this.$router.push({ name: "pokemon", params: pokemon });
    },
    getAllPokemons: function () {
      this.pokemons = [].concat(this.persistPokemons);
    },
    getData: function (valueToSearch) {
      this.pokemons = this.persistPokemons.filter((pokemon) =>
        pokemon.species.name.includes(valueToSearch)
      );
    },
    handleClick(detail) {
      alert(`You have just searched ${detail}`);
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
              this.persistPokemons.push(pokemonData);
              this.pokemons = [].concat(this.persistPokemons);
            });
        });
      });
  },
  updated() {
    setTimeout(() => {
      this.$el.querySelector("#spinner").classList.remove("show");
      this.showSpinner = false;
    }, 1000);
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
  transition-duration: 0.4s;
}

.card:hover {
  background-color: rgb(250, 250, 250);
  transform: scale(1.3);
  z-index: 1;
}
</style>
