<template>
  <Layout title="My Products" text="Manage it well and get money">
    <router-link to="/add-product">
      <Button text="Add new Product" class="mb-8" />
    </router-link>
    <Loading v-if="loading" class="m-auto" />
    <section
      class="lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid gap-4"
      v-else
    >
      <div
        class="w-full p-3 rounded-lg bg-white cursor-pointer"
        v-for="product in products"
        :key="product._id"
      >
        <router-link :to="`/my-products/${product._id}`">
          <img
            :src="`${url_image}/${product?.images[0]}`"
            class="w-full h-36 object-cover rounded-lg mb-5"
          />
          <p class="text-grey-600">{{ product?.category }}</p>
          <h2 class="text-lg text-blue-500">{{ product?.nama_product }}</h2>
        </router-link>
      </div>
    </section>
  </Layout>
</template>

<script>
import Layout from "../components/Layout/Dashboard.vue";
import Button from "../components/element/Button.vue";
import { getProductAPI } from "../actions/products";
import checkValidateToken from "../utils/checkValidateToken";
import { useToast } from "vue-toastification";
import Loading from "../components/element/Loading.vue";

export default {
  name: "MyProduct",
  data() {
    return {
      loading: true,
      url_image: "http://localhost:5000/images",
      products: [],
    };
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  mounted() {
    const getProduct = async () => {
      const response = await getProductAPI(this.$store.state.token);
      checkValidateToken(response, this.toast, this.$router);
      this.products = response?.data;
      this.loading = false;
    };
    getProduct();
  },
  components: { Layout, Button, Loading },
};
</script>

<style scoped>
</style>