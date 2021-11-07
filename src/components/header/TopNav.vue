<template>
  <div class="header-top">
    <div class="header-logo">
      <img
        src="../../assets/image/icon/icon.png"
        alt="icon"
        width="60"
        height="70"
      />
      <div>
        <div>
          <input type="text" placeholder="Search" class="search-input" />
        </div>
        <div>
          <button class="search-button">
            <icon icon="search" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "TopNav",
  components: {
    icon: FontAwesomeIcon,
  },
};
</script>

<style></style>
