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
          <img
            src="../../assets/image/review1.jpg"
            class="w-11 h-11 rounded-full mr-3"
          />
          <!-- <div class="relative">
            <router-link to="/transaction">
              <img src="../../assets/icons/shopping.svg" class="ml-4" />
              <p
                class="
                  absolute
                  top-3
                  -right-2
                  bg-green-500
                  w-4
                  h-4
                  rounded-full
                  flex
                  items-center
                  justify-center
                  p-2
                  text-white
                "
              >
                3
              </p>
            </router-link>
          </div> -->
          <HamburgerButton @click="handleShowSidebar" />
        </div>
      </section>
      <slot />
    </main>
  </section>
</template>

<script>
import Sidebar from "../element/Sidebar.vue";
import HamburgerButton from "../element/Navbar/HamburgerButton.vue";
export default {
  name: "DashboardLayout",
  components: { Sidebar, HamburgerButton },

  props: { title: String, text: String },
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    handleShowSidebar() {
      this.showSidebar = this.showSidebar ? false : true;
    },
  },
};
</script>

<style scoped>
</style>