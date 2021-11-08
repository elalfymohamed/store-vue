<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "@/components/header/Header.vue";
export default {
  components: { Header },
};
</script>

<style lang="scss">
*,
::before,
::after {
  box-sizing: border-box;
}

body {
  max-width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  font-weight: 500;
  background-color: #f5f5f5;
  line-height: 1.5;
  overflow-x: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
