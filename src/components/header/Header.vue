<template>
  <div v-if="isOpen" class="nav-ewc-arrow" />
  <header class="header">
    <div class="header-container">
      <top-nav @toggle-click-list="toggleClickList" />
      <bottom-nav />
    </div>
  </header>
  <account-list v-if="isOpen" />
</template>

<script>
// vue
import { ref, watchEffect } from "vue";
// components
import TopNav from "./TopNav.vue";
import BottomNav from "./BottomNav.vue";
import AccountList from "./AccountList.vue";
export default {
  name: "Header",

  components: {
    TopNav,
    BottomNav,
    AccountList,
  },

  setup() {
    const isOpen = ref(false);

    const toggleClickList = () => {
      isOpen.value = !isOpen.value;
    };

    const handleCloseMenu = (e) => {
      if (
        !document.querySelector("#flyout-accountList").contains(e.target) &&
        !document.querySelector("#user-avatar").contains(e.target)
      ) {
        toggleClickList();
      }
    };

    watchEffect(() => {
      if (isOpen.value) {
        window.addEventListener("click", handleCloseMenu, true);
      } else {
        window.removeEventListener("click", handleCloseMenu, true);
      }
    });

    return {
      isOpen,
      toggleClickList,
    };
  },
};
</script>

<style scoped lang="scss">
.nav-ewc-arrow {
  background: rgba(0, 0, 0, 0.281);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 6.9rem;
  left: 0;
  /* inset: 0; */
  z-index: 1;
}
</style>
