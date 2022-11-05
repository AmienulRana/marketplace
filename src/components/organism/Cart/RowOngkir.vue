<template>
  <div
    class="
      sm:p-5
      p-2.5
      bg-gray-100
      mb-3.5
      cursor-pointer
      rounded-sm
      hover:bg-gray-200
      duration-200
      border-l-4 border-green-500
    "
  >
    <p class="flex items-center">
      <span class="font-bold mr-6">{{ service_name }}</span>
      <VueNumberFormat
        :value="value"
        class="w-36 text-green-500 bg-transparent"
        disabled="true"
      ></VueNumberFormat>
    </p>
    <p class="text-grey-600">estimasi paket akan sampai {{ etd }} hari</p>
  </div>
</template>

<script>
export default {
  name: "RowOngkir",
  props: {
    service_name: { type: String },
    value: { type: Number },
    etd: { type: String },
  },
};
</script>

<style scoped>
</style>