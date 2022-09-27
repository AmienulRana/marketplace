<template>
  <button
    class="
      flex
      justify-center
      rounded-md
      font-bold
      text-base
      items-center
      text-white
      bg-green-400
      py-2.5
      px-8
    "
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
  },
};
</script>

<style scoped>
</style>