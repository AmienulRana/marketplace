<template>
  <Layout>
    <section class="lg:px-16 md:px-8 md:grid-cols-2 md:my-16 my-8 grid gap-6">
      <img src="../assets/image/imgLogin.png" class="w-80 md:block hidden" />
      <div class="">
        <h1 class="text-blue-500 mb-6 text-3xl">
          Belanja kebutuhan utama, menjadi lebih mudah
        </h1>
        <div class="md:w-4/5">
          <form @submit="handleToLogin">
            <Input
              label="Email Address"
              class="mb-3.5"
              type="email"
              :modelValue="email"
              @update:modelValue="(newValue) => (email = newValue)"
            />
            <Input
              label="Password"
              type="password"
              :modelValue="password"
              @update:modelValue="(newValue) => (password = newValue)"
            />
            <Button
              text="Sign In to My Account"
              class="mt-7 mb-3.5 w-full"
              :disabled="loading"
            />
          </form>
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
import CONFIG from "../config";
import { useToast } from "vue-toastification";
import axios from "axios";

export default {
  name: "Login",
  components: { Layout, Input, Button },
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  setup() {
    // Get toast interface
    const toast = useToast();

    return { toast };
  },
  methods: {
    async handleToLogin(event) {
      event.preventDefault();
      this.loading = true;
      const data = {
        email: this.email,
        password: this.password,
      };
      const { URL_API } = CONFIG;
      try {
        const response = await axios.post(`${URL_API}/user/login`, {
          ...data,
        });
        const { message, token } = response?.data;
        this.toast.success(message);
        this.$store.commit("storeTheToken", token);
        localStorage.setItem("token", token);
        this.$router.push({ name: "index" });
      } catch (err) {
        const { message } = err?.response?.data;
        this.toast.error(message);
        setTimeout(() => (this.loading = false), 5000);
      }
    },
  },
};
</script>

<style scoped>
</style>