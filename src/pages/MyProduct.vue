<template>
  <Layout title="My Products" text="Manage it well and get money">
    <Button text="Add new Product" class="mb-8" />
    <section class="lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid gap-4">
      <div
        class="w-full p-3 rounded-lg bg-white"
        v-for="array in arrays"
        :key="array"
      >
        <img
          src="../../public/image/newproduct1.jpg"
          class="w-full h-36 object-cover rounded-lg mb-5"
        />
        <h2 class="text-lg text-blue-500">Shirup Marzzan</h2>
        <p class="text-grey-600">Foods</p>
      </div>
    </section>
  </Layout>
</template>

<script>
import Layout from "../components/Layout/Dashboard.vue";
import Button from "../components/element/Button.vue";
export default {
  name: "MyProduct",
  data() {
    return {
      arrays: [1, 2, 3, 4, 5, 6],
    };
  },
  components: { Layout, Button },
};
</script>

<style scoped>
</style>