<template>
  <section class="section-product-feed">
    <div class="container">
      <div v-if="loading" class="loading">
        <h4 style="font-size: 1.2rem; color: #000">loading...</h4>
      </div>
      <div v-if="error" class="error">
        <h4 syle="color:#ff0000">{{ error }}.</h4>
      </div>
      <div class="products">
        <div class="product" v-for="product in products" :key="product.id">
          <product :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import getProducts from "@/composables/getProducts.js";
import Product from "./Product.vue";

export default {
  name: "ProductFeed",

  components: {
    Product,
  },

  setup() {
    const { products, error, loading, fetchProducts } = getProducts();
    fetchProducts();

    return {
      products,
      error,
      loading,
    };
  },
};
</script>

<style scoped lang="scss">
.error {
  text-align: center;
  padding: 1rem;
  background: #f2dede;
  border: 1px solid #ebccd1;
  border-radius: 0.25rem;
  margin: 1rem 0;
}

.loading {
  text-align: center;
  padding: 1rem;
  margin: 1rem 0;
}
/* ====== */

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
}
.product {
  margin: 1rem 10px;
}
</style>
