<template>
  <Layout>
    <Banner />
    <Category />
    <NewProducts />
  </Layout>
</template>

<script>
import Layout from "../components/Layout";
import Banner from "../components/organism/Home/Banner.vue";
import Category from "../components/organism/Home/Category.vue";
import NewProducts from "../components/organism/Home/NewProduct.vue";
import CONFIG from "@/config";

export default {
  name: "Home",
  components: {
    Banner,
    Category,
    NewProducts,
    Layout,
  },
  mounted() {
    const setToken = () => {
      this.$store.commit("storeTheToken", CONFIG.token);
    };
    setToken();
  },
};
</script>

<style scoped>
</style>