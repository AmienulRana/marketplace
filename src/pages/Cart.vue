<template>
  <Layout>
    <p class="text-blue-500 mb-7">
      <span class="text-grey-600">Home / </span>Cart
    </p>
    <section class="border-b-2 border-grey-500">
      <section
        v-if="!carts.products"
        class="flex flex-col items-center mt-6 mb-7"
      >
        <img src="@/assets/icons/empty-cart.svg" class="w-80" />
        <h2 class="mt-2.5 text-blue-500 font-bold">
          Opps! Keranjangmu masih kosong
        </h2>
      </section>
      <section
        class="flex mt-6 mb-7 w-full"
        v-for="product in carts?.products"
        :key="product._id"
      >
        <img
          :src="`${urlImgServer}/${product?.thumbnail}`"
          class="sm:w-40 sm:h-20 w-36 h-16 rounded-lg object-cover"
        />
        <div class="ml-3.5 overflow-hidden">
          <h2 class="text-blue-500 truncate">
            {{ product?.nama_product }}
          </h2>
          <p class="text-grey-600 text-sm my-1">
            {{ carts?.store_detail?.nama_toko }}
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
              @click="deleteFromCart(product?._id)"
            >
              <font-awesome-icon icon="minus" />
            </button>
            <p class="text-grey-600 mx-4">{{ product?.quantity }}</p>
            <button
              class="border-none bg-transparent w-7 text-grey-600"
              @click="addToCart(product?._id)"
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
        <Input
          label="Mobile"
          type="tel"
          :modelValue="address.mobile_phone"
          @update:modelValue="(newValue) => (address.mobile_phone = newValue)"
        />
      </div>
      <Textarea
        label="Alamat lengkap anda"
        :modelValue="address.full_address"
        @update:modelValue="(newValue) => (address.full_address = newValue)"
      />
    </section>
    <section class="mb-24">
      <h2 class="text-blue-500 mb-4 font-bold">Payments Information</h2>
      <p class="flex justify-between mb-2">
        Pembayaran : <span>COD (bayar ditempat)</span>
      </p>
      <p class="flex justify-between mb-2">
        Total Product :
        <span>
          <VueNumberFormat
            :value="getTotalProduct"
            class="w-max bg-transparent text-right"
            disabled="true"
          ></VueNumberFormat>
        </span>
      </p>
      <div class="flex justify-between mb-2">
        <p>Ongkos kirim :</p>
        <p>
          <span
            @click="handleShowModal"
            class="underline text-grey-600 cursor-pointer"
          >
            Pilih pengiriman</span
          >
          <VueNumberFormat
            :value="ongkir_detail?.price"
            v-if="ongkir_detail?.price !== 0"
            class="w-24 bg-transparent text-right"
            disabled="true"
          ></VueNumberFormat>
        </p>
      </div>
      <p class="flex justify-between mb-2">
        Total Harga :
        <span>
          <VueNumberFormat
            :value="getTotalHarga"
            class="w-max bg-transparent text-right"
            disabled="true"
          ></VueNumberFormat>
        </span>
      </p>
      <div class="flex justify-end mt-3">
        <Button text="Bayar sekarang" @click="handleToTransaction" />
      </div>
    </section>
  </Layout>
  <Modal
    :showModal="showModal"
    @closeModal="showModal = false"
    classModal="lg:w-1/2 md:w-4/5 w-11/12"
  >
    <section class="my-4">
      <h2 class="mt-2.5 font-bold">Silahkan Pilih Jasa Pengiriman</h2>
      <p class="text-grey-600 text-sm mb-5">
        Estimasi tanggal diterima tergantung pada waktu pengemasan Penjual dan
        waktu pengiriman ke lokasi Anda
      </p>
      <section class="border-b border-dashed pb-3 mb-3">
        <Loading v-if="loading" />
        <template v-else>
          <RowOngkir
            v-for="ongkir in ongkirs"
            :key="ongkir.service_name"
            @click="setHargaOngkir(ongkir)"
            :service_name="ongkir.service_name"
            :value="ongkir?.cost?.value"
            :etd="ongkir?.cost?.etd"
          />
        </template>
      </section>
      <p
        class="text-grey-600 text-right cursor-pointer"
        @click="showModal = false"
      >
        Nanti Saja
      </p>
    </section>
  </Modal>
</template>

<script>
import Layout from "../components/Layout";
import Input from "../components/element/Input.vue";
import {
  addTransactionAPI,
  getMyCartsAPI,
  deleteMyCartsAPI,
  checkOngkirAPI,
} from "@/actions/cart";
import { addToCartAPI } from "@/actions/detail";

import checkValidateToken from "@/utils/checkValidateToken";
import { useToast } from "vue-toastification";
import CONFIG from "@/config";
import SearchLocation from "@/components/organism/SearchLocation.vue";
import Textarea from "@/components/element/Textarea.vue";
import Button from "@/components/element/Button.vue";
import Modal from "@/components/element/Modal.vue";
import RowOngkir from "@/components/organism/Cart/RowOngkir.vue";
import Loading from "@/components/element/Loading.vue";

export default {
  name: "Cart",
  components: {
    Layout,
    Input,
    SearchLocation,
    Textarea,
    Button,
    Modal,
    RowOngkir,
    Loading,
  },
  data() {
    return {
      urlImgServer: CONFIG.URL_IMAGES,
      carts: {},
      showModal: false,
      loading: true,
      ongkirs: [],
      ongkir_detail: {
        courier: "",
        service_name: "",
        price: 0,
        estimasi: "",
      },
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
        data.carts = response?.data;
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
    handleShowModal() {
      if (!this.carts.products) {
        this.toast.error("Silahkan pilih product terlebih dahulu");
      } else if (!this.$store.state.location.lokasi_id) {
        this.toast.error("Silahkan isi Lokasi anda terlebih dahulu");
      } else {
        this.handleToCheckOngkir("jne");
        this.showModal = true;
      }
    },
    async handleToCheckOngkir(courier = "jne") {
      this.loading = true;
      const data = {
        from: this.carts?.store_detail?.address.lokasi_id,
        to: this.$store.state.location.lokasi_id,
        courier,
      };
      const response = await checkOngkirAPI(data);
      const results = response?.data?.rajaongkir?.results[0];
      let ongkir = [];
      const createCategoryService = results?.costs.map((res) => {
        ongkir.push({
          service_name: res.description,
          cost: res?.cost[0],
          courier: results.code,
        });
      });
      this.ongkirs = ongkir;
      this.loading = false;
    },
    setHargaOngkir(ongkir) {
      this.ongkir_detail = {
        courier: ongkir?.courier,
        service_name: ongkir?.service_name,
        price: ongkir?.cost?.value,
        estimasi: ongkir?.cost?.etd,
      };
    },
    validateCheckout() {
      const { lokasi_id } = this.$store.state.location;
      const { mobile_phone, full_address } = this.address;
      const { price, courier } = this.ongkir_detail;
      if (!this.carts || this.carts.products.length === 0) {
        this.toast.error("Tidak ada barang dikeranjang anda!");
        return false;
      } else if (!lokasi_id || !mobile_phone || !full_address) {
        this.toast.error("Silahkan lengkapi alamat anda!");
        return false;
      } else if (!price === 0 || !courier) {
        this.toast.error("Silahkan pilih pengiriman!");
        return false;
      }
      return true;
    },
    async handleToTransaction() {
      const { carts, ongkir_detail, address } = this;
      const {
        token,
        location: { nama_lokasi },
      } = this.$store.state;
      if (this.validateCheckout()) {
        const response = await addTransactionAPI(token, {
          store_detail: carts.store_detail,
          ongkir_detail,
          address: { ...address, nama_lokasi },
          products: carts?.products,
        });
        checkValidateToken(response, this.toast, this.$router);
        if (response.status === 200) {
          this.$router.push({ name: "index" });
        }
      }
    },
  },
  computed: {
    getTotalHarga() {
      return this.getTotalProduct + this.ongkir_detail?.price;
    },
    getTotalProduct() {
      return this.carts?.products?.reduce((total, product) => {
        return total + product?.total_harga;
      }, 0);
    },
  },
  mounted() {
    this.getMyCarts(this, this.$store, this.$router);
  },
};
</script>

<style scoped>
</style>