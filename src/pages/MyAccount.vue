<template>
  <Layout title="My Account" text="Update your current profile">
    <section class="bg-white rounded-lg h-auto w-full p-10 relative">
      <div class="md:grid-cols-2 grid gap-4 grid-cols-1 mb-6">
        <Input label="Your Name" />
        <Input label="Your Email" />
      </div>
      <div class="md:grid-cols-2 grid gap-4 grid-cols-1 mb-6">
        <Input label="Address 1" />
        <Input label="Addres 2" />
      </div>
      <div class="md:grid-cols-3 grid gap-3 grid-cols-1 mb-6">
        <Input label="Province" />
        <Input label="City" />
        <Input label="Postal Code" />
      </div>
      <div class="md:grid-cols-2 grid gap-4 grid-cols-1 mb-6">
        <Input label="Country" />
        <Input label="Mobile" />
      </div>
      <div class="flex justify-end">
        <Button class="float-right" text="Save now" />
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