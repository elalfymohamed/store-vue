<template>
  <main class="main">
    <hero />
  </main>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/home/Hero.vue";

export default {
  name: "Home",
  components: {
    Hero,
  },
};
</script>

<style scoped lang="scss">
.main {
  max-width: 1536px;
  margin: 0 auto;
}
</style>
