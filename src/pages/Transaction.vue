<template>
  <Layout title="Transactions" text="Big result start from the small one">
    <div class="flex mb-5">
      <p class="cursor-pointer font-bold border-b-2 mr-8 border-black">
        Sell Product
      </p>
      <p class="cursor-pointer">Buy Product</p>
    </div>
    <router-link to="/transactions-detail/12312">
      <RowTransaction />
    </router-link>
  </Layout>
</template>

<script>
import Layout from "../components/Layout/Dashboard.vue";
import RowTransaction from "../components/organism/RowTransaction.vue";
export default {
  name: "Transaction",
  components: { Layout, RowTransaction },
};
</script>

<style scoped>
</style>