<template>
  <Layout title="Create New Product" text="Create your own product">
    <section class="md:p-10 p-5 bg-white rounded-lg h-auto w-full relative">
      <div class="md:grid-cols-2 grid gap-4 grid-cols-1 mb-6">
        <Input label="Product Name" />
        <Input label="Price" />
      </div>
      <Select label="Category" :options="category" class="mb-6" />
      <Textarea label="Description" />
      <input
        type="file"
        multiple="multiple"
        class="mt-6 bg-grey-400 h-11 p-2.5 w-full"
        @change="viewImage"
      />
      <div
        v-if="images.length > 0"
        class="lg:gap-6 md:grid-cols-3 grid grid-cols-2 gap-4 mt-7"
      >
        <div class="relative" v-for="image in images" :key="image">
          <img :src="image" class="w-full h-40 rounded-lg" />
          <img
            src="../assets/icons/remove.svg"
            class="absolute -top-3 -right-3 cursor-pointer"
            @click="removeImageFromPreview(image)"
          />
        </div>
      </div>
    </section>
    <Button text="Create Product" class="mt-5 w-full" />
  </Layout>
</template>

<script>
import Layout from "../components/Layout/Dashboard.vue";
import Input from "../components/element/Input.vue";
import Select from "../components/element/Select.vue";
import Radio from "../components/element/Radio.vue";
import Button from "../components/element/Button.vue";
import Textarea from "../components/element/Textarea.vue";
export default {
  name: "StoreSetting",
  components: { Layout, Input, Select, Radio, Button, Textarea },
  data() {
    return {
      category: ["Funiture", "Baby", "Tools", "Gadgets"],
      images: [],
    };
  },
  methods: {
    viewImage(e) {
      const files = e.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = URL.createObjectURL(files[i]);
        this.images.push(file);
      }
    },
    removeImageFromPreview(image) {
      const file = this.images.filter((img) => image !== img);
      this.images = file;
    },
  },
};
</script>

<style scoped>
</style>