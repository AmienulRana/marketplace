<template>
  <section class="flex">
    <Sidebar :showSidebar="showSidebar" />
    <main
      class="
        lg:w-4/5
        md:px-10 md:py-9
        min-h-screen
        bg-grey-500
        w-full
        px-5
        py-3.5
      "
    >
      <section class="flex justify-between items-center mb-6">
        <div class="">
          <h1 class="text-2xl">{{ title }}</h1>
          <p class="text-grey-600">{{ text }}</p>
        </div>
        <div class="flex items-center">
          <p
            class="
              text-white text-xl
              bg-green-500
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-full
            "
          >
            {{ name }}
          </p>
          <HamburgerButton @click="handleShowSidebar" class="ml-4 lg:hidden" />
        </div>
      </section>
      <slot />
    </main>
  </section>
</template>

<script>
import Sidebar from "../element/Sidebar.vue";
import HamburgerButton from "../element/Navbar/HamburgerButton.vue";
import decodeJwtToken from "@/utils/jwtDecode";

export default {
  name: "DashboardLayout",
  components: { Sidebar, HamburgerButton },

  props: { title: String, text: String },
  data() {
    return {
      showSidebar: false,
      name: "",
    };
  },
  methods: {
    handleShowSidebar() {
      this.showSidebar = this.showSidebar ? false : true;
    },
  },
  mounted() {
    const { fullname } = decodeJwtToken();
    this.name = fullname.split("")[0];
  },
};
</script>

<style scoped>
</style>