<template>
  <div>
    <div v-color="">{{ msg | capitalize({ onlyFirstLetter: true }) }}</div>
    <div class="time">{{ time || "..." }}</div>
    <div>
      <p>
        Veces que has saludado: {{ greetNumber }} - Saludo * 2 =
        {{ doubleGreetNumber }}
      </p>
      <button class="nes-btn" @click="greet">Saludar!</button>
    </div>
  </div>
</template>

<script>
const dayjs = require("dayjs");
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => ({
    text: String,
    greetNumber: 0,
    time: "",
  }),
  // Las propiedades computadas tienen caché, es decir,
  // utilizar propiedades computadas es más óptimo porque
  // si Vue detecta que la computada va a devolver el mismo valor,
  // no ejecutará la computada ahorrando cálculos.
  computed: {
    doubleGreetNumber() {
      return this.greetNumber * 2;
    },
  },
  methods: {
    greet() {
      this.count();
    },
    count() {
      this.greetNumber++;
    },
    formatDate() {
      const currentDate = dayjs(Date.now()).format("DD-MM-YYYY h:mm:ss A");
      this.time = currentDate;
    },
    streamingOfTime() {
      setInterval(() => {
        this.formatDate();
      }, 1000);
    },
  },
  created() {
    this.streamingOfTime();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.time {
  height: 2rem;
}
div {
  margin: 0.5rem;
}
</style>
