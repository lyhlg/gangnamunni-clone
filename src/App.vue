<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(102, 102, 102);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
}

:root {
  --unit: 1px;
  /* font-size: calc(var(--unit) * 16); */
}

html {
  font-size: 62.5%;
}

body {
  margin: 0;
  height: 100vh;
  font-size: 1.6rem;
}

a {
  text-decoration: none;
  color: unset;
}

button {
  background: transparent;
  border: 0;
}

ul {
  list-style: none;
  padding-inline-start: 0;
}

.router-link-exact-active {
  color: red;
}

.test {
  height: 2000px;
}

.inner-container {
  max-width: 768px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
