<template>
  <div class="product-card">
    <div class="product-content">
      <div class="product-image">
        <div class="product-categry">
          <router-link to="/"> {{ product.category }}</router-link>
        </div>
        <img
          :src="product.image"
          :alt="product.title.slice(0, 10)"
          width="230"
          height="250"
        />
      </div>
      <div class="product-des">
        <h3>{{ product.title }}</h3>
        <p>{{ product.description.slice(0, 100) }}</p>
      </div>
      <div class="product-count">
        <div class="product-rating">
          <span>{{ product.rating.rate }}</span>
        </div>
        <div class="product-price">
          <span>{{ product.price }}</span>
          <span>$</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object,
  },
};
</script>

<style scoped lang="scss">
.product-card {
  display: flex;
  max-width: 220px;
  margin: 0 auto;
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;
  text-align: center;
  transition: all 0.3s ease-in-out;

  @media (min-width: 1440px) {
    max-width: 260px;
  }

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    /* box-shadow: 7px 5px 20px 0px #ccc; */
  }

  .product-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .product-image {
      margin-bottom: 10px;

      .product-categry {
        text-align: end;
        font-size: 11px;

        a {
          color: #999;
        }
      }
      img {
        width: 200px;
        height: 210px;
        object-fit: contain;

        @media (min-width: 1440px) {
          width: 240px;
          height: 250px;
        }
      }
    }
    .product-des {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;

      h3 {
        font-size: 0.8rem;
        margin: 5px 0;
      }
      p {
        font-size: 0.7rem;
        margin: 5px 0;
      }
    }

    .product-count {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
}
</style>
