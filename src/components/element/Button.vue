<template>
  <button
    class="
      flex
      justify-center
      rounded-md
      text-base
      items-center
      text-white
      bg-green-400
      py-2.5
      px-8
    "
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    disabled: Boolean,
  },
};
</script>

<style scoped>
</style>