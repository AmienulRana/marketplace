<template>
  <div class="lg:px-24 px-6">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../../components/element/Navbar/Navbar.vue";
import Footer from "../../components/element/Footer.vue";
export default {
  name: "Layout",
  components: { Navbar, Footer },
};
</script>

<style scoped>
</style>