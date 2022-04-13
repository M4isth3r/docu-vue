<template>
  <div class="home">
    <img
      :class="myClass"
      v-bind:alt="alternativeText"
      src="../assets/logo.png"
    />
    <HelloWorld :msg="userLogged" componentName="HelloWorld" />
    <MiComponente />
    <VDocuAxios />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MiComponente from "@/components/MiComponente.vue";
import VDocuAxios from "@/components/VDocuAxios.vue";
import auth from "@/logic/auth";

export default {
  name: "Home",
  components: {
    HelloWorld,
    MiComponente,
    VDocuAxios,
  },
  data: () => ({
    alternativeText: "Vue logo",
    myClass: "my-class",
  }),
  computed: {
    userLogged() {
      return `Welcome ${auth.getUserLogged() || ''}` ;
    }
  }
};
</script>
