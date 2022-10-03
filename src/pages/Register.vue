<template>
  <Layout>
    <section class="md:w-2/5 md:my-16 m-auto my-8">
      <h1 class="text-blue-500 mb-6 text-3xl">
        Memulai untuk jual beli <br />
        dengan cara terbaru
      </h1>

      <Input
        label="Full Name"
        class="mb-3.5"
        :modelValue="fullname"
        @update:modelValue="(newValue) => (fullname = newValue)"
      />
      <Input
        label="Email Address"
        class="mb-3.5"
        :modelValue="email"
        @update:modelValue="(newValue) => (email = newValue)"
      />
      <Input
        label="Password"
        type="password"
        class="mb-3.5"
        :modelValue="password"
        @update:modelValue="(newValue) => (password = newValue)"
      />
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
        <Input
          label="Nama Toko"
          class="mb-3.5"
          :modelValue="nama_toko"
          @update:modelValue="(newValue) => (nama_toko = newValue)"
        />
        <Select
          label="Category"
          :options="categorys"
          :modelValue="category"
          @update:modelValue="(newValue) => (category = newValue)"
        />
      </template>
      <Button
        text="Sign In to My Account"
        class="mt-7 mb-3.5 w-full"
        @click="handleToRegister"
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
      categorys: ["Funiture", "Baby", "Tools", "Gadgets"],
      openAStore: false,
      fullname: "",
      email: "",
      password: "",
      category: "",
      nama_toko: "",
    };
  },
  methods: {
    changeValueStore() {
      if (!this.openAStore) {
        this.nama_toko = "";
        this.category = "";
      }
      this.openAStore = this.openAStore ? false : true;
    },
    handleToRegister() {
      const data = {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        openStore: this.openAStore,
        category: this.category,
        nama_toko: this.nama_toko,
      };
      console.log(data);
    },
  },
};
</script>

<style scoped>
</style>