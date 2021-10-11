<template>
  <div>
    <div>{{ msg }}</div>
    <button @click="greet(componentName)">Saludar!</button>
    <div>
      <p>
        Veces que has saludado: {{ greetNumber }} - Saludo * 2 =
        {{ doubleGreetNumber }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    componentName: String,
  },
  data: () => ({
    text: String,
    greetNumber: 0,
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
    greet(name) {
      console.log(`Hola mundo desde ${name}`);
      this.count();
    },
    count() {
      this.greetNumber++;
    },
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
</style>
