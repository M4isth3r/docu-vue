<template>
  <div class="login">
    <h1 class="title">Login in the page</h1>
    <form action class="form" @submit.prevent="register">
      <label class="form-label" for="#email">Email:</label>
      <v-docu-input
        id="email"
        v-model="email"
        :type="'email'"
        :placeholder="'Email'"
      ></v-docu-input>
      <label class="form-label" for="#password">Password:</label>
      <v-docu-input
        id="password"
        v-model="password"
        :type="'password'"
        :placeholder="'Password'"
      ></v-docu-input>
      <span class="error" v-if="password && hasPasswordNumbers">
        The password can not contain numbers.
      </span>
      <label class="form-label" for="#password-repeat"
        >Please repeat the password:</label
      >
      <v-docu-input
        id="password-repeat"
        v-model="passwordRepeat"
        :type="'password'"
        :placeholder="'Repeat password'"
      ></v-docu-input>
      <span class="error" v-if="passwordRepeat && !isPasswordMatch">
        The passwords are not match.
      </span>
      <input class="form-submit" type="submit" value="Register" />
    </form>
    <div class="example">
      <span
        >Data example because we are using for login/register
        <a href="https://reqres.in/" target="_blank" rel="noopener noreferrer"
          >https://reqres.in/</a
        ></span
      >
      <span>"email": "eve.holt@reqres.in"</span>
      <span>"password": "pistol"</span>
    </div>
  </div>
</template>

<script>
import auth from "@/logic/auth";
import VDocuInput from "../components/common/VDocuInput.vue";

export default {
  components: {
    VDocuInput,
  },
  data: () => ({
    email: "",
    password: "",
    passwordRepeat: "",
  }),
  computed: {
    hasPasswordNumbers() {
      return /\d/.test(this.password);
    },
    isPasswordMatch() {
      return this.password === this.passwordRepeat;
    },
  },
  methods: {
    register() {
      auth.register(this.email, this.password, this.passwordRepeat).then(
        () => this.$router.push("/"),
        () => alert("Ups! Somthing was wrong :(")
      );
    },
  },
};
</script>

<style scoped>
@import "../assets/styles/vdocu-form.css";
</style>
