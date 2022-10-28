<template>
  <Layout>
    <section class="lg:w-2/5 md:w-1/2 md:my-16 m-auto my-8">
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
          @change="openAStore = true"
        />
        <Radio
          label="Enggak, makasih"
          id="tidak"
          @change="openAStore = false"
        />
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
import axios from "axios";
import { useToast } from "vue-toastification";
import CONFIG from "../config";
import OptionsCategory from "../data/category.js";

export default {
  name: "Register",
  components: { Layout, Input, Button, Radio, Select },
  data() {
    return {
      categorys: OptionsCategory,
      openAStore: false,
      fullname: "",
      email: "",
      password: "",
      category: "",
      nama_toko: "",
    };
  },
  setup() {
    // Get toast interface
    const toast = useToast();

    return { toast };
  },
  methods: {
    async handleToRegister() {
      const data = {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        openAStore: this.openAStore,
        category: this.category,
        nama_toko: this.nama_toko,
      };
      const { URL_API } = CONFIG;
      try {
        const response = await axios.post(`${URL_API}/user/register`, {
          ...data,
        });
        const { message } = response.data;
        this.toast.success(message);
        this.$router.push({ name: "login" });
      } catch (err) {
        const { message } = err.response.data;
        this.toast.error(message);
      }
    },
  },
};
</script>

<style scoped>
</style>