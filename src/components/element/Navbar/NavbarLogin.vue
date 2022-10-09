<template>
  <div>
    <div class="md:border-l-2 relative flex pl-2 border-grey-500">
      <router-link to="/dashboard">
        <p class="text-blue-500 flex">
          Hi, <span class="sm:block hidden ml-2">Amienul</span>
        </p>
      </router-link>
      <router-link to="/cart">
        <img src="../../../assets/icons/shopping.svg" class="ml-4" />
        <p
          class="
            absolute
            top-3
            -right-2
            bg-green-500
            w-4
            h-4
            rounded-full
            flex
            items-center
            justify-center
            p-2
            text-white
          "
        >
          3
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarLogin",
};
</script>

<style scoped>
</style>