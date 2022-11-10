<template>
  <Layout
    title="Detail Transactions"
    text="Big result start from the small one"
  >
    <div
      class="bg-white rounded-lg h-auto w-full p-10 relative"
      v-if="!loading"
    >
      <section class="md:grid-cols-3 md:gap-3 grid grid-cols-1 md:mb-7">
        <section class="w-56 h-56">
          <img
            :src="`${urlImgServer}/${transaction?.product?.thumbnail}`"
            class="w-full h-full rounded-lg"
          />
        </section>
        <section class="md:mt-0 mt-4">
          <p class="md:hidden md:text-xl text-lg text-blue-500 mb-4">
            Infomation Detail
          </p>
          <TextInformation
            title="Customer Name"
            :value="transaction?.user_id?.fullname"
          />
          <TextInformation
            title="Date Transaction"
            :value="new Date(transaction?.createdAt).toLocaleDateString()"
          />
          <TextInformation
            title="Total"
            :value="transaction?.product?.total_harga"
          />
        </section>
        <section>
          <TextInformation
            title="Product Name"
            :value="transaction?.product?.nama_product"
          />
          <TextInformation
            title="Quantity"
            :value="String(transaction?.product?.quantity)"
          />
          <TextInformation
            title="Mobile"
            :value="transaction?.address_user?.phone_number"
          />
        </section>
      </section>
      <section class="grid md:gap-2 md:grid-cols-2 grid-cols-1">
        <section>
          <p class="md:text-xl text-lg text-blue-500 mb-4">
            Shipping Infomation
          </p>
          <TextInformation
            title="Location"
            :value="transaction?.address_user?.nama_lokasi"
          />
          <div class="grid md:grid-cols-2 grid-cols-1">
            <TextInformation title="Provinsi" value="Sumatera utara" />
            <TextInformation
              title="Postal code"
              :value="transaction?.address_user?.postal_code"
              class="md:mr-14"
            />
          </div>
          <TextInformation
            title="Full address"
            :value="transaction?.address_user?.full_address"
          />
          <div class="mb-6">
            <template
              v-if="preview_by === 'store' && transaction?.status !== 'Selesai'"
            >
              <p class="text-sm mb-2 text-grey-600">Status</p>
              <Select
                :options="options"
                class="md:w-1/2"
                :modelValue="status_product"
                @update:modelValue="
                  (new_status) => (status_product = new_status)
                "
              />
            </template>
            <!-- <TextInformation
              v-else-if="preview_by === 'store' && transaction?.status !== 'Selesai'"
              title="Status"
              :value="transaction?.status"
            /> -->
            <TextInformation
              v-else
              title="Status"
              :value="transaction?.status"
            />
          </div>
        </section>
        <section>
          <p class="md:text-xl text-lg text-blue-500 mb-4">
            Courier Infomation
          </p>
          <TextInformation
            title="Ekspedisi"
            :value="transaction?.ongkir_detail?.courier.toLocaleUpperCase()"
          />
          <TextInformation
            title="Service"
            :value="transaction?.ongkir_detail?.service_name"
          />
          <TextInformation
            title="Price"
            :value="transaction?.ongkir_detail?.price"
          />
          <TextInformation
            title="Estimasi"
            :value="`${transaction?.ongkir_detail?.estimasi} Hari`"
          />
        </section>
      </section>
      <div class="flex justify-end">
        <Button
          v-if="preview_by === 'store'"
          text="Save Now"
          @click="editStatusProduct"
          :disabled="
            status_product === transaction?.status ||
            transaction?.status === 'Telah diserahkan kurir'
          "
        />
        <template v-else-if="preview_by === 'user'">
          <Button
            v-if="transaction?.status !== 'Selesai'"
            text="Paket sudah diterima"
            @click="editStatusProduct('Selesai')"
            :disabled="transaction?.status === ('Pending' || 'Cancel')"
          />
        </template>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout/Dashboard.vue";
import TextInformation from "@/components/organism/TransactionDetail/TextInformation.vue";
import Select from "@/components/element/Select.vue";
import {
  getDetailTransactionAPI,
  editStatusProductAPI,
} from "@/actions/transaction";
import checkValidateToken from "@/utils/checkValidateToken";
import { useToast } from "vue-toastification";
import Button from "@/components/element/Button.vue";
import CONFIG from "@/config";

export default {
  name: "TransactionDetail",
  data() {
    return {
      urlImgServer: CONFIG.URL_IMAGES,
      options: ["Pending", "Telah diserahkan kurir", "Cancel"],
      loading: true,
      transaction: {},
      status_product: "",
      preview_by: "",
    };
  },
  components: { Layout, TextInformation, Select, Button },
  setup() {
    const toast = useToast();
    return { toast };
  },
  methods: {
    async editStatusProduct(status) {
      const { token } = this.$store.state;
      const { id } = this.$route.params;
      const response = await editStatusProductAPI(
        token,
        id,
        status ? status : this.status_product
      );
      checkValidateToken(response, this.toast, this.$router);
      if (response.status === 200) {
        this.$router.push("/transactions");
      }
    },
  },
  mounted() {
    const { by } = this.$route.query;
    const getTransactionDetail = async () => {
      const { id } = this.$route.params;
      const { token } = this.$store.state;
      const response = await getDetailTransactionAPI(token, id);
      checkValidateToken(response, this.toast, this.$route);
      this.transaction = response?.data;
      this.status_product = response?.data?.status;
      this.preview_by = by;
      this.loading = false;
    };
    getTransactionDetail();
  },
};
</script>

<style scoped>
</style>