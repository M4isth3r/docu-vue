<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Bienvenido a la página de práctica" />
    <MiComponente />
    <ComponentTable />
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
};
</script>
