<template>
  <Layout>
    <p class="text-blue-500"><span class="text-grey-600">Home / </span>Cart</p>
    <section class="border-b-2 border-grey-500">
      <section
        v-if="products.length === 0"
        class="flex flex-col items-center mt-6 mb-7"
      >
        <img src="@/assets/icons/empty-cart.svg" class="w-80" />
        <h2 class="mt-2.5 text-blue-500 font-bold">
          Opps! Keranjangmu masih kosong
        </h2>
      </section>
      <section
        class="flex mt-6 mb-7"
        v-for="product in products"
        :key="product._id"
      >
        <img
          :src="`${urlImgServer}/${product?.thumbnail}`"
          class="sm:w-40 sm:h-20 w-36 h-16 rounded-lg object-cover"
        />
        <div class="ml-3.5 w-full">
          <h2 class="text-blue-500 truncate">
            {{ product?.nama_product }}
          </h2>
          <p class="text-grey-600 text-sm my-1">
            {{ product?.store_detail?.nama_toko }}
          </p>
          <p class="text-grey-600 text-sm">
            <VueNumberFormat
              :value="product?.total_harga"
              class="w-max bg-transparent"
              disabled="true"
            ></VueNumberFormat>
          </p>
          <div class="flex border-2 border-grey-500 w-max px-2 rounded-md mt-2">
            <button
              class="border-none bg-transparent w-7 text-grey-600"
              @click="deleteFromCart(product?.id_product)"
            >
              <font-awesome-icon icon="minus" />
            </button>
            <p class="text-grey-600 mx-4">{{ product?.quantity }}</p>
            <button
              class="border-none bg-transparent w-7 text-grey-600"
              @click="addToCart(product?.id_product)"
            >
              <font-awesome-icon icon="plus" />
            </button>
          </div>
        </div>
      </section>
    </section>
    <section class="mt-7 mb-12 pb-4 border-b-2 border-grey-500">
      <h2 class="text-blue-500 mb-4 font-bold">Shipping Details</h2>
      <SearchLocation
        class="mb-6"
        label="Lokasi Anda"
        :getLocationUser="getLocationUser"
      />
      <div class="md:grid-cols-2 grid gap-3 grid-cols-1 mb-6">
        <Input label="Provinsi" disabled :modelValue="address.provinsi" />
        <Input label="Postal Code" disabled :modelValue="address.postal_code" />
      </div>
      <div class="md:grid-cols-2 grid gap-4 grid-cols-1 mb-6">
        <Input label="Negara" disabled :modelValue="address.negara" />
        <Input label="Mobile" type="tel" :modelValue="address.mobile_phone" />
      </div>
      <Textarea
        label="Alamat lengkap anda*"
        :modelValue="address.full_address"
      />
    </section>
    <section class="mb-24">
      <h2 class="text-blue-500 mb-4 font-bold">Payments Information</h2>
    </section>
  </Layout>
</template>

<script>
import Layout from "../components/Layout";
import Input from "../components/element/Input.vue";
import { getMyCartsAPI } from "@/actions/cart";
import { addToCartAPI } from "@/actions/detail";
import { deleteMyCartsAPI } from "@/actions/cart";
import checkValidateToken from "@/utils/checkValidateToken";
import { useToast } from "vue-toastification";
import CONFIG from "@/config";
import SearchLocation from "@/components/organism/SearchLocation.vue";
import Textarea from "@/components/element/Textarea.vue";

export default {
  name: "Cart",
  components: { Layout, Input, SearchLocation, Textarea },
  data() {
    return {
      urlImgServer: CONFIG.URL_IMAGES,
      products: [],
      address: {
        provinsi: this.$store.state.location.provinsi,
        postal_code: this.$store.state.location.postal_code,
        negara: "Indonesia",
        mobile_phone: undefined,
        full_address: "",
      },
    };
  },
  setup() {
    const toast = useToast();
    const getMyCarts = async (data, store, router) => {
      const response = await getMyCartsAPI(store.state.token);
      checkValidateToken(response, toast, router);
      if (response.status === 200) {
        data.products = response?.data;
      }
    };
    return { toast, getMyCarts };
  },
  methods: {
    getLocationUser(location) {
      this.address.provinsi = location.provinsi;
      this.address.postal_code = location.postal_code;
    },
    async addToCart(id) {
      const data = {
        id_product: id,
      };
      const response = await addToCartAPI(this.$store.state.token, data);
      checkValidateToken(response, this.toast, this.$router);
      if (response.status === 200) {
        this.getMyCarts(this, this.$store, this.$router);
      }
    },
    async deleteFromCart(id) {
      const response = await deleteMyCartsAPI(this.$store.state.token, id);
      checkValidateToken(response, this.toast, this.$router);
      if (response.status === 200) {
        this.getMyCarts(this, this.$store, this.$router);
      }
    },
  },
  mounted() {
    this.getMyCarts(this, this.$store, this.$router);
  },
};
</script>

<style scoped>
</style>