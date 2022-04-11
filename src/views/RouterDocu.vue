<template>
  <div class="container">
    <div class="card border-light">
      <h2>Router push</h2>
      <p>Se navega a la ruta que se pasa como parámetro.</p>
      <div class="code" v-highlight>
        <pre class="language-javascript">
          <code>
      // Con la URL de la ruta
      this.$router.push('home')
      // Con el nombre de la ruta
      this.$router.push({ path: 'home' })
          </code>
        </pre>
      </div>
      <p
        class="navigation-button"
        @click="() => this.$router.push({ name: 'Home' })"
      >
        Ejemplo: navegar al home
      </p>
    </div>

    <div class="card border-light">
      <h2>Router replace</h2>
      <p>
        No se guarda en la historia del navegaddor, no es posible dar hacia
        atrás para volver a la página anterior
      </p>
      <div class="code" v-highlight>
        <pre class="language-javascript">
          <code>
      // Con la URL de la ruta
      this.$router.replace('about')
      // Con el nombre de la ruta
      this.$router.replace({ path: 'about' })
          </code>
        </pre>
      </div>
      <p
        class="navigation-button"
        @click="() => this.$router.replace({ name: 'About' })"
      >
        Ejemplo: navegar al about
      </p>
    </div>

    <div class="card border-light">
      <h2>Props en el Vue Router</h2>
      <p>Setear <strong>props</strong> a true en el array del router.</p>
      <div class="code" v-highlight>
        <pre class="language-javascript">
          <code>
      {
        path: "/users",
        name: "users",
        component: Users
        props: true
      }
      // ¡Solo funciona navegando por el name!
      this.$router.push({ name: 'About', params: { title: 'OpenSource is the way!' }})"
          </code>
        </pre>
      </div>
      <p
        class="navigation-button"
        @click="
          () =>
            this.$router.push({
              name: 'About',
              params: { title: 'OpenSource is the way!' },
            })
        "
      >
        Ejemplo: navegar al about
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  --color-link: #42b983;
}

.card {
  margin-bottom: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.code {
  margin: auto;
  width: 90%;
}

.navigation-button {
  background-color: white;
  border: 2px solid var(--color-link);
  color: var(--color-link);
  cursor: alias;
  display: inline-block;
  margin: 0 auto 0.5em;
  padding: 10px;
  text-align: center;
  width: 300px;
}

.navigation-button:hover {
  background-color: var(--color-link);
  color: white;
}
</style>
