<template>
  <Layout title="Store Settings" text="Make store that profitable">
    <section class="bg-white rounded-lg h-auto w-full p-10 relative">
      <div class="md:grid-cols-2 grid gap-4 grid-cols-1 mb-6">
        <Input
          label="Store Name*"
          :modelValue="store_name"
          @update:modelValue="(newValue) => (store_name = newValue)"
        />
        <Select
          label="Category"
          :options="options"
          :modelValue="category"
          @update:modelValue="(newValue) => (category = newValue)"
        />
      </div>
      <div class="grid grid-cols-1 mb-6">
        <div class="relative">
          <Input
            label="Your Location*"
            :modelValue="address.location"
            @update:modelValue="
              (newValue, event) => searchPlace(newValue, event)
            "
          />
          <div
            class="
              absolute
              top-full
              rounded-md
              left-0
              w-full
              bg-white
              py-2
              shadow-lg
              overflow-y-scroll
              max-h-44
            "
            v-if="query.length > 0"
          >
            <template v-if="query.length < 3">
              <Loading />
            </template>
            <p
              v-if="locationsPrediction.length < 1 && query.length >= 3"
              class="text-red-400 px-6"
            >
              404 : Sorry the location you are looking for is not in our disytem
            </p>
            <p
              class="cursor-pointer px-6 text-grey-600 mb-4 hover:bg-grey-500"
              v-for="prediction in locationsPrediction"
              :key="prediction._id"
              @click="handleSelectLocation(prediction)"
            >
              <font-awesome-icon icon="fa-location-dot" class="mr-2" />
              {{ prediction?.nama_lokasi }}
            </p>
          </div>
        </div>
      </div>
      <div class="md:grid-cols-2 grid gap-3 grid-cols-1 mb-6">
        <Input label="Province*" :modelValue="address.province" disabled />
        <!-- <Input label="City*" :modelValue="address.city" /> -->
        <Input label="Postal Code*" :modelValue="address.postalCode" disabled />
      </div>
      <div class="md:grid-cols-2 grid gap-4 grid-cols-1 mb-6">
        <Input label="Country*" :modelValue="country" disabled />
        <Input
          label="Mobile*"
          :modelValue="mobile_phone"
          @update:modelValue="(newValue) => (mobile_phone = newValue)"
        />
      </div>
      <label class="text-blue-500"> Store Status </label>
      <p class="text-grey-600">Apakah saat ini toko Anda buka?</p>
      <div class="flex">
        <Radio
          label="Buka"
          id="buka"
          class="mr-5"
          :checked="store_status === 'aktif'"
          @change="() => (store_status = 'aktif')"
        />
        <Radio
          label="Sementara tutup"
          id="tutup"
          :checked="store_status !== 'aktif'"
          @change="() => (store_status = 'non_aktif')"
        />
      </div>
      <div class="flex justify-end">
        <Button text="Save now" @click="handleEditStore" />
      </div>
    </section>
  </Layout>
</template>

<script>
import Layout from "../components/Layout/Dashboard.vue";
import Input from "../components/element/Input.vue";
import Select from "../components/element/Select.vue";
import Radio from "../components/element/Radio.vue";
import Button from "../components/element/Button.vue";
import CONFIG, { MODE } from "../config";
import Loading from "../components/element/Loading.vue";
import checkValidateToken from "../utils/checkValidateToken.js";
import { getMyStoreAPI, editMyStoreAPI } from "../actions/storeSetting.js";
import OptionsCategory from "../data/category.js";
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  name: "StoreSetting",
  components: { Layout, Input, Select, Radio, Button, Loading },
  data() {
    return {
      options: OptionsCategory,
      query: "",
      locations: [],
      locationsPrediction: [],
      store_name: "",
      category: "",
      address: {
        province: "",
        postalCode: "",
        province_id: "",
        city_id: "",
        location: "",
      },
      country: "Indonesia",
      mobile_phone: "",
      store_status: "",
    };
  },
  setup() {
    // Get toast interface
    const toast = useToast();

    return { toast };
  },
  methods: {
    searchPlace(newValue) {
      this.query = newValue;

      if (this.query.length >= 3) {
        const searchLocation = this.locations.filter((location) =>
          location.nama_lokasi.toLowerCase().includes(this.query.toLowerCase())
        );

        this.locationsPrediction = searchLocation;
      } else {
        this.locationsPrediction = [];
      }
    },
    handleSelectLocation(location) {
      this.locationsPrediction = [];
      this.query = "";

      const { provinsi, postal_code, nama_lokasi, id_lokasi, id_provinsi } =
        location;
      this.address.province = provinsi;
      this.address.postalCode = postal_code;
      this.address.location = nama_lokasi;
      this.address.city_id = id_lokasi;
      this.address.province_id = id_provinsi;
    },
    async handleEditStore() {
      try {
        const {
          store_name,
          email,
          address,
          mobile_phone,
          category,
          store_status,
        } = this;

        const response = await editMyStoreAPI(
          {
            store_name,
            address,
            mobile_phone,
            category,
            store_status,
          },
          { token: this.$store.state.token }
        );

        checkValidateToken(response, this.toast, this.$router);
      } catch (err) {
        this.toast.error(err?.response?.message);
      }
    },
  },
  mounted() {
    const getMyStore = async () => {
      const mystore = await getMyStoreAPI({ token: this.$store.state.token });
      this.store_name = mystore?.nama_toko;
      this.category = mystore?.category;
      this.address.province = mystore?.address?.provinsi;
      this.address.postalCode = mystore?.address?.postal_code;
      this.address.location = mystore?.address?.nama_lokasi;
      this.address.city_id = mystore?.address?.id_lokasi;
      this.address.province_id = mystore?.address?.id_provinsi;
      this.store_status = mystore?.status_toko;
      this.mobile_phone = mystore?.mobile_phone;
      checkValidateToken(mystore, this.toast, this.$router);
    };
    getMyStore();
    const getLocation = async () => {
      try {
        const URL_API =
          MODE === "dev"
            ? "http://localhost:4000"
            : "https://locations-eight.vercel.app";
        const response = await axios.get(`${URL_API}/api/v1/location`);
        this.locations = response.data;
      } catch (err) {
        this.toast.error("Gagal mengambil Lokasi, silahkan hubungi developer");
      }
    };
    getLocation();
  },
};
</script>

<style scoped>
</style>