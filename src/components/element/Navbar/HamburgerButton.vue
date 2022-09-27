<template>
  <div class="relative w-8 block h-14 md:hidden md:invisible">
    <input
      class="z-20 opacity-0 absolute block h-8 w-full top-5 left-0 pointer"
      type="checkbox"
    />
    <div
      class="
        block
        w-8
        h-6
        z-10
        absolute
        flex flex-col
        justify-between
        top-4
        left-0
      "
    >
      <span
        class="
          w-full
          block
          h-1
          bg-green-500
          rounded-xl
          ease-in-out
          duration-500
          origin-top-left
        "
      ></span>
      <span
        class="w-1/2 block h-1 bg-green-500 rounded-xl ease-in-out duration-300"
      ></span>
      <span
        class="
          w-full
          block
          h-1
          bg-green-500
          rounded-xl
          ease-in-out
          duration-500
          origin-bottom-left
        "
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HamburgerButton",
};
</script>

<style scoped>
input[type="checkbox"]:checked ~ .block span:nth-child(1) {
  transform: rotate(45deg);
}

input[type="checkbox"]:checked ~ .block span:nth-child(2) {
  transform: scaleY(0);
}

input[type="checkbox"]:checked ~ .block span:nth-child(3) {
  transform: rotate(-45deg);
}
</style>