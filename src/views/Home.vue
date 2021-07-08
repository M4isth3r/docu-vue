<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <mi-componente></mi-componente>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MiComponente from "@/components/MiComponente.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    MiComponente,
  },
};
</script>
