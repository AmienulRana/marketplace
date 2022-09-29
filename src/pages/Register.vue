<template>
  <Layout>
    <section class="md:w-2/5 md:my-16 m-auto my-8">
      <h1 class="text-blue-500 mb-6 text-3xl">
        Memulai untuk jual beli <br />
        dengan cara terbaru
      </h1>
      <Input label="Full Name" class="mb-3.5" />
      <Input label="Email Address" class="mb-3.5" />
      <Input label="Password" type="password" class="mb-3.5" />
      <p class="text-blue-500">Store</p>
      <p class="text-grey-600">Apakah anda juga ingin membuka toko?</p>
      <div class="flex">
        <Radio
          label="Iya, boleh"
          id="iya"
          class="mr-5"
          @change="changeValueStore"
        />
        <Radio label="Enggak, makasih" id="tidak" @change="changeValueStore" />
      </div>
      <template v-if="openAStore">
        <Input label="Nama Toko" class="mb-3.5" />
        <Select label="Category" :options="categorys" />
      </template>
      <Button
        text="Sign In to My Account"
        class="mt-7 mb-3.5 w-full"
        @click="getValueStore"
      />
      <router-link to="/register">
        <Button text="Sign up" class="bg-grey-500 text-grey-700 w-full" />
      </router-link>
    </section>
  </Layout>
</template>

<script>
import Layout from "../components/Layout";
import Input from "../components/element/Input.vue";
import Button from "../components/element/Button.vue";
import Select from "../components/element/Select.vue";
import Radio from "../components/element/Radio.vue";
export default {
  name: "StoreSetting",
  components: { Layout, Input, Button, Radio, Select },
  data() {
    return {
      openAStore: false,
      categorys: ["Funiture", "Baby", "Tools", "Gadgets"],
    };
  },
  methods: {
    changeValueStore() {
      this.openAStore = this.openAStore ? false : true;
    },
    getValueStore() {
      console.log(this.openAStore);
    },
  },
};
</script>

<style scoped>
</style>