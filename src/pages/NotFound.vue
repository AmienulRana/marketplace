<template>
  <Navbar />
  <h2 class="text-center text-grey-600 text-2xl my-20">
    404 | Opps! Halaman yang anda kunjungi tidak ditemukan
  </h2>
  <Footer />
</template>

<script>
import Navbar from "../components/element/Navbar/Navbar.vue";
import Footer from "../components/element/Footer";
export default {
  name: "NotFound",
  components: { Navbar, Footer },
};
</script>

<style scoped>
</style>