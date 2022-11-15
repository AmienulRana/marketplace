<template>
  <div class="flex mb-4 items-center justify-between p-3.5 bg-white rounded-md">
    <div class="flex items-center">
      <img :src="thumbnail" class="w-11 h-11 object-cover rounded-md mr-3" />
      <h2 class="md:w-72 truncate w-48">{{ name_product }}</h2>
    </div>
    <p>{{ customer_name }}</p>
    <p :class="classForStatus">{{ status }}</p>
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
    status: { type: String },
  },
  computed: {
    classForStatus() {
      switch (this.status) {
        case "Selesai":
          return "text-green-500";
        case "Pending":
          return "text-red-500";
        case "Cancel":
          return "text-red-500";
        default:
          return "text-yellow-500";
      }
    },
  },
};
</script>

<style scoped>
</style>