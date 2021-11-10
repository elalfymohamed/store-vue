<template>
  <main class="main">
    <banner />
  </main>
</template>

<script>
// @ is an alias to /src
import Banner from "@/constants/Banner.vue";

export default {
  name: "Home",
  components: {
    Banner,
  },
};
</script>

<style scoped lang="scss">
.main {
  max-width: 1536px;
  margin: 0 auto;
}
</style>
