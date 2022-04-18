# MIXINS
  Se trata de la creción de funcionalidades de la app que puedan ser reutilizadas.
  Vue lo primero que aplica es el método del mixin, si se crea un método con el mismo nombre dentro del componente, este úiltimo será el que se ejecute.

  ## Ejemplo
  ```js
  // src/mixins/clickMixin.js
  export default {
    methods: {
      clickHandler(value) {
        console.log(value);
      }
    }
  };
  ```

  Se importa en otro componente:
  ```js
  import clickMixin from "@/mixins/clickMixin";
  ...
  export default {
    name: "HelloWorld",
    mixins: [clickMixin],
    props: {
      msg: String,
    },
  ...
  ```

# Fuente
  - Vuejs, ["Mixins"](https://es.vuejs.org/v2/guide/mixins.html)
  - López, D., (2020, agosto), ["Un vistazo a los mixins de Vue"](https://codingpotions.com/vue-mixins)
