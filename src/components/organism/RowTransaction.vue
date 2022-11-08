<template>
  <div class="flex mb-4 items-center justify-between p-3.5 bg-white rounded-md">
    <div class="flex items-center">
      <img
        src="../../../public/image/newproduct1.jpg"
        class="w-11 h-11 object-cover rounded-md mr-3"
      />
      <h2>Shirup Marzzan</h2>
    </div>
    <p>Angga Risky</p>
    <p>12 Januari, 2020</p>
    <img src="../../assets/icons/arrow-right.svg" />
  </div>
</template>

<script>
export default {
  name: "RowTransaction",
  props: {
    thumbnail: { type: String },
    name_product: { type: String },
    customer_name: { type: String },
  },
  computed: {
    generateLocalDate(date) {
      return new Date(date).toLocaleDateString();
    },
  },
};
</script>

<style scoped>
</style>