<template>
  <Layout title="Create New Product" text="Create your own product">
    <section class="md:p-10 p-5 bg-white rounded-lg h-auto w-full relative">
      <form @submit.prevent="handleToAddProduct">
        <div class="md:grid-cols-2 grid gap-4 grid-cols-1 mb-6">
          <Input
            label="Product Name"
            :modelValue="product_name"
            @update:modelValue="(newValue) => (product_name = newValue)"
          />
          <Input
            type="number"
            label="Price"
            :modelValue="price"
            @update:modelValue="(newValue) => (price = newValue)"
          />
        </div>
        <Select
          label="Category"
          :options="options"
          class="mb-6"
          :modelValue="category"
          @update:modelValue="(newValue) => (category = newValue)"
        />
        <Input
          type="number"
          label="Stok"
          class="mb-6"
          :modelValue="stok"
          @update:modelValue="(newValue) => (stok = newValue)"
        />
        <Textarea
          label="Description"
          :modelValue="description"
          @update:modelValue="(newValue) => (description = newValue)"
        />
        <input
          type="file"
          multiple="multiple"
          class="mt-6 bg-grey-400 h-11 p-2.5 w-full"
          @change="viewImage"
          accept="image/*"
        />
        <p
          class="my-2"
          :class="images.length === 4 ? 'text-red-500' : 'text-green-500'"
        >
          {{ restTheImageUpload }}
        </p>
        <div
          v-if="images.length > 0"
          class="md:grid-cols-4 grid grid-cols-2 gap-4 mt-7"
        >
          <div class="relative" v-for="image in images" :key="image.blobImgUrl">
            <img :src="image.blobImgUrl" class="w-full h-40 rounded-lg" />
            <img
              src="../assets/icons/remove.svg"
              class="absolute -top-3 -right-3 cursor-pointer"
              @click="removeImageFromPreview(image)"
            />
            <p class="text-red-500">{{ image.error }}</p>
          </div>
        </div>
        <Button text="Create Product" class="mt-5 w-full" type="sumbit" />
      </form>
    </section>
  </Layout>
</template>

<script>
import Layout from "../components/Layout/Dashboard.vue";
import Input from "../components/element/Input.vue";
import Select from "../components/element/Select.vue";
import Radio from "../components/element/Radio.vue";
import Button from "../components/element/Button.vue";
import Textarea from "../components/element/Textarea.vue";
import checkValidateToken from "../utils/checkValidateToken";
import { addProductAPI } from "../actions/products";
import { useToast } from "vue-toastification";

export default {
  name: "StoreSetting",
  components: { Layout, Input, Select, Radio, Button, Textarea },
  data() {
    return {
      product_name: "",
      price: 0,
      description: "",
      options: ["Funiture", "Baby", "Tools", "Gadgets"],
      category: "",
      stok: 0,
      images: [],
    };
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  methods: {
    async handleToAddProduct() {
      const fd = new FormData();
      this.images.map((image) => fd.append("images", image.originalFile));
      fd.append("nama_product", this.product_name);
      fd.append("deskripsi", this.description);
      fd.append("harga_product", this.price);
      fd.append("category", this.category);
      fd.append("stok", this.stok);

      const response = await addProductAPI(fd, {
        token: this.$store.state.token,
      });
      checkValidateToken(response, this.toast, this.$router);
      if (response.status === 200) {
        this.$router.push("/my-products");
      }
    },
    validateImg(image) {
      const max_file = 1000000;
      if (image.size > max_file) {
        return "maximal size image 1 MB";
      }
    },
    viewImage(e) {
      const files = e.target.files;
      for (let i = 0; i < files.length; i++) {
        const error = this.validateImg(files[i]);
        const file = URL.createObjectURL(files[i]);
        this.images.push({ blobImgUrl: file, originalFile: files[i], error });
      }
    },
    removeImageFromPreview(image) {
      const file = this.images.filter(
        (img) => image.blobImgUrl !== img.blobImgUrl
      );
      this.images = file;
    },
  },
  computed: {
    restTheImageUpload() {
      return `Sisa image yang bisa diupload adalah ${
        4 - this.images.length
      } dari 4 `;
    },
  },
};
</script>

<style scoped>
</style>