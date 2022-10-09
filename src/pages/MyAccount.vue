<template>
  <Layout title="My Account" text="Update your current profile">
    <section class="bg-white rounded-lg h-auto w-full p-10 relative">
      <div class="md:grid-cols-2 grid gap-4 grid-cols-1 mb-6">
        <Input
          label="Your Name*"
          :modelValue="fullname"
          @update:modelValue="(newValue) => (fullname = newValue)"
        />
        <Input
          label="Your Email*"
          :modelValue="email"
          @update:modelValue="(newValue) => (email = newValue)"
        />
      </div>
      <div class="flex justify-end">
        <Button text="Save now" />
      </div>
    </section>
  </Layout>
</template>

<script>
import Layout from "../components/Layout/Dashboard.vue";
import Input from "../components/element/Input.vue";
import Select from "../components/element/Select.vue";
import Radio from "../components/element/Radio.vue";
import Button from "../components/element/Button.vue";
import decodeJwtToken from "../utils/jwtDecode";

export default {
  name: "StoreSetting",
  components: { Layout, Input, Select, Radio, Button },
  data() {
    return {
      options: ["Funiture", "Baby", "Tools", "Gadgets"],
      fullname: "",
      email: "",
    };
  },

  methods: {},
  mounted() {
    const { fullname, email } = decodeJwtToken();
    this.fullname = fullname;
    this.email = email;
  },
};
</script>

<style scoped>
</style>
