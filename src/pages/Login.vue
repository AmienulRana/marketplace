<template>
  <Layout>
    <section class="lg:px-16 md:px-8 grid grid-cols-2 gap-6 my-16">
      <img src="../assets/image/imgLogin.png" class="w-80 md:block hidden" />
      <div class="">
        <h1 class="text-blue-500 mb-6 text-3xl">
          Belanja kebutuhan utama, menjadi lebih mudah
        </h1>
        <div class="w-4/5">
          <Input label="Email Address" class="mb-3.5" />
          <Input label="Password" type="password" />
          <Button text="Sign In to My Account" class="mt-7 mb-3.5 w-full" />
          <router-link to="/register">
            <Button text="Sign up" class="bg-grey-500 text-grey-700 w-full" />
          </router-link>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Layout from "../components/Layout";
import Input from "../components/element/Input.vue";
import Button from "../components/element/Button.vue";
export default {
  name: "StoreSetting",
  components: { Layout, Input, Button },
  data() {
    return {
      options: ["Funiture", "Baby", "Tools", "Gadgets"],
    };
  },
};
</script>

<style scoped>
</style>