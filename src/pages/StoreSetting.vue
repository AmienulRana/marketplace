<template>
  <Layout title="Store Settings" text="Make store that profitable">
    <section class="bg-white rounded-lg h-4/5 w-full p-10 relative">
      <div class="md:grid-cols-2 grid gap-4 grid-cols-1 mb-6">
        <Input label="Store Name" />
        <Select label="Category" :options="options" />
      </div>
      <label class="text-blue-500"> Store Status </label>
      <p class="text-grey-600">Apakah saat ini toko Anda buka?</p>
      <div class="flex">
        <Radio label="Buka" id="buka" class="mr-5" />
        <Radio label="Sementara tutup" id="tutup" />
      </div>
      <Button class="absolute bottom-10 right-10" text="Save now" />
    </section>
  </Layout>
</template>

<script>
import Layout from "../components/Layout/Dashboard.vue";
import Input from "../components/element/Input.vue";
import Select from "../components/element/Select.vue";
import Radio from "../components/element/Radio.vue";
import Button from "../components/element/Button.vue";
export default {
  name: "StoreSetting",
  components: { Layout, Input, Select, Radio, Button },
  data() {
    return {
      options: ["Funiture", "Baby", "Tools", "Gadgets"],
    };
  },
};
</script>

<style scoped>
</style>