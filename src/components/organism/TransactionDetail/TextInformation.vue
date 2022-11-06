<template>
  <div class="md:block mb-6 flex justify-between">
    <p class="md:mb-2 text-sm text-grey-600">{{ title }}</p>
    <p class="md:text-lg text-sm text-blue-500 truncate">{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: "TextInformation",
  props: { title: String, value: String },
};
</script>

<style scoped>
</style>