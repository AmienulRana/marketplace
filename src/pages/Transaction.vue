<template>
  <Layout title="Transactions" text="Big result start from the small one">
    <div class="flex mb-5">
      <p
        class="cursor-pointer mr-8 border-black"
        @click="changeGetTransaction('store')"
        :class="get_transaction_by === 'store' ? 'font-bold border-b-2' : ''"
      >
        Sell Product
      </p>
      <p
        class="cursor-pointer border-black"
        @click="changeGetTransaction('user')"
        :class="get_transaction_by === 'user' ? 'font-bold border-b-2' : ''"
      >
        Buy Product
      </p>
    </div>
    <template v-for="transaction in transactions" :key="transaction._id">
      <router-link
        :to="`/transactions-detail/${transaction._id}?by=${get_transaction_by}`"
        v-if="transactions.length > 0"
      >
        <RowTransaction
          :thumbnail="`${urlImgServer}/${transaction?.product?.thumbnail}`"
          :name_product="transaction?.product?.nama_product"
          :customer_name="transaction?.user_id?.fullname"
          :status="transaction?.status"
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
import checkValidateToken from "@/utils/checkValidateToken";
import { useToast } from "vue-toastification";

export default {
  name: "Transaction",
  data() {
    return {
      transactions: [],
      urlImgServer: CONFIG.URL_IMAGES,
      get_transaction_by: "store",
    };
  },
  components: { Layout, RowTransaction },
  methods: {
    changeGetTransaction(by) {
      this.get_transaction_by = by;
      this.getProductPurchased(this);
    },
  },
  setup() {
    const toast = useToast();

    const getProductPurchased = async (data) => {
      const response = await getProductPurchaseAPI(
        data.$store.state.token,
        `?by=${data.get_transaction_by}`
      );
      console.log(response.data);
      data.transactions = response?.data;
      checkValidateToken(response, toast, data.$router);
    };

    return { toast, getProductPurchased };
  },
  mounted() {
    this.getProductPurchased(this);
  },
};
</script>

<style scoped>
</style>