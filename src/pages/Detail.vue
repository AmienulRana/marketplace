<template>
  <Layout>
    <p class="mb-8"><span class="text-grey-600">Home / </span>Product Detail</p>
    <section v-if="!loading" class="md:flex-row flex flex-wrap justify-between">
      <section class="md:w-2/5 h-72 w-full rounded-xl relative">
        <div class="w-full h-full">
          <img
            :src="`${urlImgServer}/${imagePreview}`"
            alt="image"
            class="h-full w-full rounded-lg"
          />
        </div>
        <div
          class="
            w-full
            md:shadow-none
            h-auto
            grid grid-cols-4
            gap-2
            absolute
            -bottom-28
            left-0
            p-2
            rounded-lg
            bg-grey-400
          "
        >
          <div
            class="w-full rounded-lg overflow-hidden"
            v-for="(image, i) in product?.images"
            :key="i"
            @click="changePreviewImg(image)"
            :class="image === imagePreview ? 'border-2 border-orange-500' : ''"
          >
            <img
              :src="`${urlImgServer}/${image}`"
              alt="image"
              class="md:h-85px h-16 w-full"
            />
          </div>
        </div>
      </section>
      <section class="md:w-3/5 md:px-10 md:mt-0 mt-32">
        <div class="w-full">
          <h1 class="text-xl">{{ product?.nama_product }}</h1>
          <p class="text-grey-600">By {{ product?.store_id?.nama_toko }}</p>
          <p class="text-orange-500 mt-1.5">
            <span class="text-black mr-2"
              >{{ product?.terjual || 0 }} Terjual |</span
            >
            <VueNumberFormat :value="product?.harga_product"></VueNumberFormat>
          </p>
          <h3 class="text-lg mt-4 mb-2">Pengiriman :</h3>
          <p class="text-grey-600">
            Dikirim dari : {{ product?.store_id?.address?.provinsi }}
          </p>
          <div class="flex items-center mb-2.5">
            <p class="text-grey-600 mr-2">Kota Tujuan :</p>
            <SearchLocation class="md:w-2/3" />
          </div>

          <p class="text-grey-600">
            Ongkos Kirim :

            <VueNumberFormat :value="ongkir"></VueNumberFormat>
          </p>
          <div class="flex mt-2.5">
            <Button
              text="Cek Ongkir"
              @click="handleToCheckOngkir"
              class="mr-2.5"
              background="bg-grey-600"
              :disabled="loadingCheckOngkir"
            />

            <Button text="Add to Cart" @click="addToCart(product?._id)" />
          </div>
        </div>
      </section>
    </section>
    <section class="md:mt-32 md:w-4/5 mt-8">
      <h1 class="text-xl mt-4 mb-2.5">Deskripsi Product</h1>
      <p class="text-grey-700">
        {{ product?.deskripsi }}
      </p>
    </section>
    <section class="mt-8">
      <h1 class="text-xl mb-4">Customers Reviews(30)</h1>
      <div class="flex lg:w-1/2 mb-7">
        <img
          src="../assets/image/review1.jpg"
          class="h-14 w-14 rounded-full mr-4"
        />
        <div>
          <h1 class="text-xl text-blue-500">Hazza Risky</h1>
          <p class="text-grey-600">
            I thought it was not good for living room. I really happy to decided
            buy this product last week now feels like homey.
          </p>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import { detailProductAPI } from "@/actions/products";
import Button from "../components/element/Button.vue";
import Layout from "../components/Layout";
import CONFIG from "@/config";
import Input from "@/components/element/Input.vue";
import SearchLocation from "@/components/organism/SearchLocation.vue";
import { addToCartAPI } from "@/actions/detail";
import checkValidateToken from "@/utils/checkValidateToken";
import { useToast } from "vue-toastification";

export default {
  name: "Detail",
  data() {
    return {
      urlImgServer: CONFIG.URL_IMAGES,
      loading: true,
      loadingCheckOngkir: false,
      product: {},
      imagePreview: "",
      ongkir: 0,
    };
  },
  mounted() {
    const getDetailProduct = async () => {
      const response = await detailProductAPI(
        this.$route.params.id,
        this.$store.state.token
      );
      this.imagePreview =
        response?.data?.thumbnail || response?.data?.images[0];
      this.product = response?.data;
      this.loading = false;
    };
    getDetailProduct();
  },
  components: { Button, Layout, Input, SearchLocation },
  setup() {
    const toast = useToast();
    return { toast };
  },
  methods: {
    changePreviewImg(img) {
      this.imagePreview = img;
    },
    async handleToCheckOngkir() {
      const data = {
        from: this.product?.store_id?.address?.lokasi_id,
        to: this.$store.state.location.lokasi_id,
      };
      const response = await checkOngkirAPI(data);
      if (response?.status > 300) {
        return;
      } else {
        this.ongkir = response;
      }
    },
    async addToCart(id) {
      const data = {
        id_product: id,
      };
      const response = await addToCartAPI(this.$store.state.token, data);
      checkValidateToken(response, this.toast, this.$router);
    },
  },
};
</script>