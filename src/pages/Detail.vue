<template>
  <Layout>
    <p class="mb-8"><span class="text-grey-600">Home / </span>Product Detail</p>
    <section
      v-if="!loading"
      class="md:flex-row flex flex-wrap justify-between flex-col relative"
    >
      <div class="md:h-400px md:w-3/4 h-72 w-full rounded-xl overflow-hidden">
        <img
          :src="`${urlImgServer}/${imagePreview}`"
          alt="image"
          class="h-full w-full"
        />
      </div>
      <div
        class="
          md:w-1/5 md:static md:block md:p-0 md:bg-transparent md:shadow-none
          h-auto
          w-full
          flex
          justify-between
          absolute
          -bottom-14
          left-0
          p-2
          shadow-lg
          rounded-lg
          bg-white
        "
      >
        <div
          class="md:mb-5 md:w-full w-1/5 rounded-lg overflow-hidden"
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
    <section class="sm:flex md:mt-8 mt-20">
      <div class="sm:hidden w-full mb-8">
        <Button text="Add to Cart" class="w-full" />
      </div>
      <div class="md:w-3/4">
        <h1 class="text-xl">{{ product.nama_product }}</h1>
        <p class="text-grey-600">By {{ product?.store_id?.nama_toko }}</p>
        <p class="text-orange-500 mt-1.5">
          <VueNumberFormat :value="product?.harga_product"></VueNumberFormat>
        </p>
        <h1 class="text-xl mt-4 mb-2.5">Deskripsi Product</h1>
        <p class="text-grey-700">
          {{ product.deskripsi }}
        </p>
      </div>
      <div class="lg:w-1/5 md:w-1/4 sm:block hidden w-full">
        <Button text="Add to Cart" class="w-full" />
      </div>
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
export default {
  name: "Detail",
  data() {
    return {
      urlImgServer: CONFIG.URL_IMAGES,
      loading: true,
      product: {},
      imagePreview: "",
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
  components: { Button, Layout },
  methods: {
    changePreviewImg(img) {
      this.imagePreview = img;
    },
  },
};
</script>