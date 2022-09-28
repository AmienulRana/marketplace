<template>
  <Layout>
    <p class="mb-8"><span class="text-grey-600">Home / </span>Product Detail</p>
    <section
      class="md:flex-row flex flex-wrap justify-between flex-col relative"
    >
      <div class="md:h-400px md:w-3/4 h-72 w-full rounded-xl overflow-hidden">
        <img
          :src="`./image/${imagePreview}`"
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
          v-for="(image, i) in images"
          :key="i"
          @click="changePreviewImg(image)"
          :class="image === imagePreview ? 'border-2 border-orange-500' : ''"
        >
          <img
            :src="`./image/${image}`"
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
        <h1 class="text-xl">Sofa Ternyaman</h1>
        <p class="text-grey-600">By Galih Pratama</p>
        <p class="text-orange-500 mt-1.5">$1,409</p>
        <p class="text-grey-700 mt-2.5">
          Bring the past into the future with the Nike Air Max 2090, a bold look
          inspired by the DNA of the iconic Air Max 90. Brand-new Nike Air
          cushioning underfoot adds unparalleled comfort while transparent mesh
          and vibrantly coloured details on the upper are blended with timeless
          OG features for an edgy, modernised look.
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
import Button from "../components/element/Button.vue";
import Layout from "../components/Layout";
export default {
  name: "Detail",
  data() {
    return {
      imagePreview: "detail1.jpg",
      images: ["detail1.jpg", "detail2.png", "detail4.png", "detail5.jpg"],
    };
  },
  components: { Button, Layout },
  methods: {
    changePreviewImg(img) {
      this.imagePreview = img;
    },
  },
};
</script>