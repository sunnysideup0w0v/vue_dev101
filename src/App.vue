<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Header msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
