<template>
  <div class="login">
    <h1 class="title">Sign in to page</h1>
    <form action class="form" @submit.prevent="login">
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
      <p v-if="error" class="error">{{ wrongTypedData }}</p>
      <input class="form-submit" type="submit" value="Sign in" />
    </form>
    <p class="msg">
      Don't have an account yet?
      <router-link to="/register">Register now</router-link>
    </p>
    <div class="example">
      <span>Data example becouse we are using for login/register <a href="https://reqres.in/" target="_blank" rel="noopener noreferrer">https://reqres.in/</a></span>
      <span>"email": "eve.holt@reqres.in"</span>
      <span>"password": "cityslicka"</span>
    </div>
  </div>
</template>

<script>
import auth from "@/logic/auth";

export default {
  data: () => ({
    email: "",
    password: "",
    error: false,
    wrongTypedData: "Incorrect username or password.",
  }),
  methods: {
    login() {
      auth.login(this.email, this.password).then(
        () => {
          auth.setUserLogged(this.email);
          this.$router.push("/");
        },
        () => (this.error = true)
      );
    },
  },
};
</script>

<style scoped>
  @import '../assets/styles/vdocu-form.css';
</style>
