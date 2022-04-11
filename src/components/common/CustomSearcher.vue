<template>
  <form id="custom-searcher" @submit.prevent="checkForm">
    <div class="nes-field">
      <input
        class="nes-input"
        type="text"
        v-model="valueToSearch"
        placeholder="Value to search..."
      />
    </div>
    <div class="nes-field">
      <button class="nes-btn is-primary" type="submit" @click="fireEvent">
        Submit
      </button>
    </div>
    <div class="nes-field">
      <button class="nes-btn is-error" type="reset" @click="rechargeData">
        Reset
      </button>
    </div>
  </form>
</template>

<script>
// https://nostalgic-css.github.io/NES.css/
import "nes.css/css/nes.min.css";

export default {
  name: "CustomSearcher",
  data: () => ({
    valueToSearch: "",
  }),
  methods: {
    checkForm: function () {
      if (this.valueToSearch != "") {
        this.$emit("search-value", this.valueToSearch);
      } else {
        alert("You has to fill the input!!");
      }
    },
    rechargeData: function () {
      this.$emit("recharge-data");
    },
    fireEvent: function () {
      this.$emit("submit-pressed", this.valueToSearch);
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Press Start 2P";
}

#custom-searcher {
  display: flex;
  justify-content: center;
}

.nes-field {
  margin: 0 10px 10px 0;
  padding: 0.5rem 0;
}

:is(input, button) {
  height: 90%;
}
</style>
