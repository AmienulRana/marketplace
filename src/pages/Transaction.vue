<template>
  <Layout title="Transactions" text="Big result start from the small one">
    <div class="flex mb-5">
      <p class="cursor-pointer font-bold border-b-2 mr-8 border-black">
        Sell Product
      </p>
      <p class="cursor-pointer">Buy Product</p>
    </div>
    <template v-for="transaction in transactions" :key="transaction._id">
      <router-link :to="`/transactions-detail/${transaction._id}`">
        <RowTransaction
          :thumbnail="`${urlImgServer}/${transaction?.product?.thumbnail}`"
          :name_product="transaction?.product?.nama_product"
          :customer_name="transaction?.user_id?.fullname"
          :date="transaction?.createdAt"
        />
      </router-link>
    </template>
  </Layout>
</template>

<script>
import Layout from "../components/Layout/Dashboard.vue";
import RowTransaction from "../components/organism/RowTransaction.vue";
import { getProductPurchaseAPI } from "@/actions/transaction";
import CONFIG from "@/config";
export default {
  name: "Transaction",
  data() {
    return {
      transactions: [],
      urlImgServer: CONFIG.URL_IMAGES,
    };
  },
  components: { Layout, RowTransaction },
  mounted() {
    const getProductPurchased = async () => {
      const response = await getProductPurchaseAPI(this.$store.state.token);
      this.transactions = response?.data;
    };

    getProductPurchased();
  },
};
</script>

<style scoped>
</style>