<template>
  <header class="header">
    <div class="header-container">
      <TopNav />
    </div>
  </header>
</template>

<script>
// import Navbar from "./Navbar.vue";
import TopNav from "./TopNav.vue";
export default {
  name: "Header",
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  components: {
    // Navbar,
    TopNav,
  },
};
</script>

<style></style>
