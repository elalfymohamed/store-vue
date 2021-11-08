<template>
  <div class="nav-ewc-arrow" />
  <header class="header">
    <div class="header-container">
      <TopNav />
      <BottomNav />
    </div>
  </header>
  <AccountList />
</template>

<script>
import TopNav from "./TopNav.vue";
import BottomNav from "./BottomNav.vue";
import AccountList from "./AccountList.vue";
export default {
  name: "Header",
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  components: {
    TopNav,
    BottomNav,
    AccountList,
  },
};
</script>

<style></style>
