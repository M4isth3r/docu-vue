<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/hacker-news">HackerNews</router-link> |
      <router-link to="/todo-list">TodoList</router-link> |
      <router-link :to="{ name: 'RouterDocu' }">RouterDocu</router-link> |
      <router-link to="/poke-wiki">PokeWiki</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'Login' }">Login</router-link> |
      <router-link :to="{ name: 'Register' }">Register</router-link> |
      <router-link :to="{ name: 'VeeValidate' }">VeeValidate</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import 'victormono';
export default {
  name: "App",
  components: {},
};
</script>

<style scoped lang="scss">
:host {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  cursor: default;
}

#app {
  font-family: 'Victor Mono SemiBold', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 18px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
