import { ref } from "vue";

import axios from "axios";

const getProducts = () => {
  const products = ref([]);
  const error = ref(null);
  const loading = ref(false);

  const fetchProducts = async () => {
    loading.value = true;
    await axios
      // api call to get products from fake api server (fakestoreapi.com)
      // .get(`https://fakestoreapi.com/products`)
      // api from vue.config.js
      .get(`api/products`)
      .then((res) => {
        products.value = res.data.slice(0, 20);
        console.log(products.value);
      })
      .catch((err) => {
        error.value = err.message;
      });
    loading.value = false;
  };

  return {
    products,
    error,
    loading,
    fetchProducts,
  };
};

export default getProducts;
