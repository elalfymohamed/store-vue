<template>
  <banner />
  <product-feed />
</template>

<script>
import Banner from "@/constants/Banner.vue";
import ProductFeed from "./ProductFeed.vue";
export default {
  name: "Hero",
  components: {
    Banner,
    ProductFeed,
  },
};
</script>
