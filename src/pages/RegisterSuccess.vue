<template>
  <div class="flex justify-center items-center flex-col min-h-screen">
    <img src="../assets/icons/success.svg" />
    <h1 class="text-2xl text-blue-500 mt-10 mb-3.5">Register Success</h1>
    <p class="text-grey-600">
      Kamu sudah berhasil terdaftar <br />
      bersama kami. Let’s grow up now.
    </p>
    <p class="mt-3.5 text-grey-600">
      Anda akan di redirect ke halaman Login secara otomatis dalam
      <span class="text-green-500">{{ countTiming }}</span> detik.
    </p>
  </div>
</template>

<script>
import Button from "../components/element/Button.vue";
export default {
  name: "RegisterSuccess",
  components: { Button },
  data() {
    return {
      countTiming: 4,
    };
  },
  mounted() {
    // setInterval(() => {
    //   if (this.countTiming === 0) {
    //     this.$router.push({ name: "login" });
    //     clearInterval();
    //     // this.countTiming = 4;
    //   } else {
    //     this.countTiming = this.countTiming - 1;
    //   }
    // }, 1000);
  },
};
</script>

<style scoped>
</style>