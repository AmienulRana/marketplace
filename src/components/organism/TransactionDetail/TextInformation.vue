<template>
  <div class="md:block mb-6 flex justify-between">
    <p class="md:mb-2 text-sm text-grey-600">{{ title }}</p>
    <p class="md:text-lg text-sm text-blue-500 truncate">
      <template v-if="typeof value === 'string'">
        {{ value }}
      </template>
      <VueNumberFormat
        :value="value || 1"
        class="md:text-left w-32 bg-transparent text-right"
        disabled="true"
        v-else
      ></VueNumberFormat>
    </p>
  </div>
</template>

<script>
export default {
  name: "TextInformation",
  props: { title: String, value: undefined | String | Number },
};
</script>

<style scoped>
</style>