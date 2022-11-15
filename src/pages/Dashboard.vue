<template>
  <Layout title="Dashboard" text="Look what you have made today!">
    <section class="sm:grid-cols-3 grid mb-6">
      <div class="md:h-32 sm:w-11/12 bg-white mb-2 w-full rounded-xl p-6">
        <p class="text-grey-600">Customer</p>
        <h2 class="md:text-3xl text-2xl font-bold text-blue-500">
          {{ customer }}
        </h2>
      </div>
      <div class="md:h-32 sm:w-11/12 bg-white mb-2 w-full rounded-xl p-6">
        <p class="text-grey-600">Revenue</p>
        <h2 class="md:text-3xl text-2xl font-bold">
          <VueNumberFormat
            :value="revenue"
            class="w-full bg-transparent text-blue-500"
            disabled="true"
          ></VueNumberFormat>
        </h2>
      </div>
      <div class="md:h-32 sm:w-11/12 bg-white mb-2 w-full rounded-xl p-6">
        <p class="text-grey-600">Transaction</p>
        <h2 class="md:text-3xl text-2xl font-bold text-blue-500">
          {{ transaction }}
        </h2>
      </div>
    </section>
  </Layout>
</template>

<script>
import Layout from "../components/Layout/Dashboard.vue";
import RowTransaction from "../components/organism/RowTransaction.vue";
import { getAllTransactionAPI } from "@/actions/dashboard";

export default {
  name: "Dahsboard",
  data() {
    return {
      customer: 0,
      revenue: 0,
      transaction: 0,
    };
  },
  components: { Layout, RowTransaction },
  methods: {
    removeDuplicateUser(transactions) {
      const getIdUser = transactions.map((transaction) => transaction?.user_id);
      return [...new Set(getIdUser)];
    },
    getTotalProduct(transactions) {
      return transactions.reduce((total, transactions) => {
        return total + transactions?.product.total_harga;
      }, 0);
    },
  },
  mounted() {
    const getHistoryTransaction = async () => {
      const response = await getAllTransactionAPI();
      if (response.data.length !== 0) {
        this.transaction = response.data.length;
        this.customer = this.removeDuplicateUser(response.data).length;
        const total_harga = this.getTotalProduct(response.data);
        this.revenue = total_harga;
      }
    };
    getHistoryTransaction();
  },
};
</script>

<style scoped>
</style>