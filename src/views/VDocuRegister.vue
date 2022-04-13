<template>
  <div class="login">
    <h1 class="title">Login in the page</h1>
    <form action class="form" @submit.prevent="register">
      <label class="form-label" for="#email">Email:</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Email"
      />
      <label class="form-label" for="#password">Password:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        placeholder="Password"
      />
      <label class="form-label" for="#password-repeat"
        >Please repeat the password:</label
      >
      <input
        v-model="passwordRepeat"
        class="form-input"
        type="password"
        id="password-repeat"
        placeholder="Password"
      />
      <p v-if="error" class="error">
        You have typed bad format of email or password.
      </p>
      <input class="form-submit" type="submit" value="Register" />
    </form>
    <div class="example">
      <span>Data example becouse we are using for login/register <a href="https://reqres.in/" target="_blank" rel="noopener noreferrer">https://reqres.in/</a></span>
      <span>"email": "eve.holt@reqres.in"</span>
      <span>"password": "pistol"</span>
    </div>
  </div>
</template>

<script>
import auth from "@/logic/auth";

export default {
  data: () => ({
    email: "",
    password: "",
    passwordRepeat: "",
    error: false,
  }),
  methods: {
    register() {
      auth
        .register(this.email, this.password, this.passwordRepeat)
        .then(() => this.$router.push("/"), () => alert("Ups! Somthing was wrong :("));
    },
  },
};
</script>

<style scoped>
  @import '../assets/styles/vdocu-form.css';
</style>
