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
    :class="buttonClass"
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
  computed: {
    buttonClass() {
      const { disabled, background } = this;
      let classBtn = " ";
      classBtn += background ? background : "bg-green-400 ";
      classBtn += disabled ? "opacity-70 cursor-default" : "opacity-100 ";
      return classBtn;
    },
  },
};
</script>

<style scoped>
</style>