<template>
  <h1 class="text-blue-500 mt-6 mb-4 text-xl font-medium">New Products</h1>
  <section
    class="grid md:grid-cols-4 lg:grid-cols-5 gap-4 sm:grid-cols-3 grid-cols-2"
  >
    <div
      class="mb-6 cursor-pointer"
      v-for="product in products"
      :key="product._id"
    >
      <router-link
        :to="
          store_id === product?.store_id
            ? `/my-products/${product._id}`
            : `/detail/${product._id}`
        "
      >
        <img
          :src="`${urlImgServe}/${product.thumbnail || product.images[0]}`"
          class="cover h-36 w-full rounded-lg"
        />
        <h2 class="text-blue-500 text-lg mt-1 truncate">
          {{ product.nama_product }}
        </h2>
        <p class="text-orange-500">
          <VueNumberFormat
            :value="product.harga_product"
            :options="{
              precision: 0,
            }"
          ></VueNumberFormat>
        </p>
      </router-link>
    </div>
  </section>
</template>

<script>
import { getNewProductAPI } from "@/actions/home.js";
import CONFIG from "@/config";
import jwtDecode from "jwt-decode";

export default {
  name: "NewProduct",
  data() {
    return {
      urlImgServe: CONFIG.URL_IMAGES,
      products: [],
      store_id: "",
    };
  },
  mounted() {
    const getNewProduct = async () => {
      const response = await getNewProductAPI();
      this.products = response?.data;
      const token = localStorage.getItem("token") || this.$store.state.token;
      if (token) {
        const { store_id } = jwtDecode(token);
        this.store_id = store_id;
      }
    };
    getNewProduct();
  },
};
</script>

<style scoped>
</style>