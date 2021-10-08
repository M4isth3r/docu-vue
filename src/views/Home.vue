<template>
  <div class="home">
    <img
      :class="myClass"
      v-bind:alt="alternativeText"
      src="../assets/logo.png"
    />
    <HelloWorld msg="Bienvenido a la página de práctica" />
    <MiComponente />
    <!-- 2 formas de llamar al componente -->
    <ComponentTable />
    <component-table coleccion="coleccion"></component-table>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MiComponente from "@/components/MiComponente.vue";
import ComponentTable from "@/components/ComponentTable.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    MiComponente,
    ComponentTable,
  },
  data: () => ({
    coleccion: [
      { name: "Hera", description: "la diosa del Olimpo" },
      { name: "Hefesto", description: "el dios del fuego y de la metalurgia" },
      { name: "Afrodita", description: "la diosa del amor y de la belleza" },
    ],
    alternativeText: "Vue logo",
    myClass: "my-class",
  }),
};
</script>
