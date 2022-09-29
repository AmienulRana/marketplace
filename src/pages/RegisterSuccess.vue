<template>
  <div class="flex justify-center items-center flex-col min-h-screen">
    <img src="../assets/icons/success.svg" />
    <h1 class="text-2xl text-blue-500 mt-10 mb-3.5">Welcome to Store</h1>
    <p class="text-grey-600">
      Kamu sudah berhasil terdaftar <br />
      bersama kami. Let’s grow up now.
    </p>
    <router-link to="/dashboard">
      <Button text="My Dashboard" class="mt-24 mb-3.5" />
    </router-link>
    <router-link to="/">
      <Button text="Go To Shopping" class="bg-grey-500 text-grey-700" />
    </router-link>
  </div>
</template>

<script>
import Button from "../components/element/Button.vue";
export default {
  name: "RegisterSuccess",
  components: { Button },
};
</script>

<style scoped>
</style>