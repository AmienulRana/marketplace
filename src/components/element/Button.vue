<template>
  <button
    class="
      flex
      justify-center
      rounded-md
      text-base
      items-center
      text-white
      py-2.5
      px-8
    "
    :class="background ? background : 'bg-green-400'"
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
    background: String,
  },
};
</script>

<style scoped>
</style>