<template>
  <div
    class="
      lg:static lg:shadow-none lg:translate-x-0
      md:w-1/5
      sm:w-4/12
      min-h-screen
      bg-white
      absolute
      z-10
      top-0
      w-3/5
      shadow-lg
      duration-500
    "
    :class="showSidebar ? 'translateX-0-custom' : '-translateX-full-custom'"
  >
    <img
      src="../../assets/icons/logo.svg"
      class="w-16 h-20 block m-auto mt-9 mb-16"
    />
    <ul>
      <li
        v-for="(data, i) in dataSidebar"
        class="mb-6 py-1.5 pl-3 block"
        :key="i"
        :class="handleMenuSidebarActive(data.to)"
      >
        <router-link :to="data.to">{{ data.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: { showSidebar: Boolean },
  data() {
    return {
      dataSidebar: [
        { name: "Dashboard", to: "/dashboard" },
        { name: "My Products", to: "/my-products" },
        { name: "Transactions", to: "/transactions" },
        { name: "Store Settings", to: "/settings" },
        { name: "My Account", to: "/my-account" },
      ],
    };
  },
  methods: {
    handleMenuSidebarActive(path) {
      if (this.$route.path === path) {
        return "duration-200 ease-in linear-gradient-custom font-bold border-r-4 border-orange-500";
      }
    },
  },
};
</script>

<style scoped>
@media (max-width: 1023px) {
  .-translateX-full-custom {
    transform: translateX(-100%);
  }
  .translateX-0-custom {
    transform: translateX(0);
  }
}
</style>