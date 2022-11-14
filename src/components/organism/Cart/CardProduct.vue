<template>
  <section class="flex mb-2.5">
    <img
      :src="`${urlImgServer}/${thumbnail}`"
      class="sm:w-40 sm:h-20 w-36 h-16 rounded-lg object-cover"
    />
    <div class="ml-3.5 overflow-hidden">
      <h2 class="text-blue-500 truncate">
        {{ nama_product }}
      </h2>
      <p class="text-grey-600 text-sm">
        <VueNumberFormat
          :value="total_harga"
          class="w-max bg-transparent"
          disabled="true"
        ></VueNumberFormat>
      </p>
      <div class="flex border-2 border-grey-500 w-max px-2 rounded-md mt-2">
        <button
          class="border-none bg-transparent w-7 text-grey-600"
          @click="deleteFromCart(_id)"
        >
          <font-awesome-icon icon="minus" />
        </button>
        <p class="text-grey-600 mx-4">{{ quantity }}</p>
        <button
          class="border-none bg-transparent w-7 text-grey-600"
          @click="addToCart(_id)"
        >
          <font-awesome-icon icon="plus" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import CONFIG from "@/config";
export default {
  name: "CartProduct",
  data() {
    return {
      urlImgServer: CONFIG.URL_IMAGES,
    };
  },
  props: {
    nama_product: String,
    thumbnail: String,
    total_harga: Number,
    quantity: Number,
    _id: String,
    addToCart: Function,
    deleteFromCart: Function,
  },
};
</script>

<style scoped>
</style>