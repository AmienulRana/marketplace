<template>
  <Layout title="Dashboard" text="Look what you have made today!">
    <section class="sm:grid-cols-3 grid mb-6">
      <div class="md:h-32 sm:w-11/12 bg-white mb-2 w-full rounded-xl p-6">
        <p class="text-grey-600">Customer</p>
        <h2 class="md:text-3xl text-2xl font-bold text-blue-500">15,029</h2>
      </div>
      <div class="md:h-32 sm:w-11/12 bg-white mb-2 w-full rounded-xl p-6">
        <p class="text-grey-600">Revenue</p>
        <h2 class="md:text-3xl text-2xl font-bold text-blue-500">$931,290</h2>
      </div>
      <div class="md:h-32 sm:w-11/12 bg-white mb-2 w-full rounded-xl p-6">
        <p class="text-grey-600">Transaction</p>
        <h2 class="md:text-3xl text-2xl font-bold text-blue-500">22,409,399</h2>
      </div>
    </section>
    <section>
      <h2 class="text-blue-500 mb-3.5 text-lg">Recent Transactions</h2>
      <RowTransaction />
    </section>
  </Layout>
</template>

<script>
import Layout from "../components/Layout/Dashboard.vue";
import RowTransaction from "../components/organism/RowTransaction.vue";
export default {
  name: "Dahsboard",
  components: { Layout, RowTransaction },
};
</script>

<style scoped>
</style>