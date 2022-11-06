<template>
  <div>
    <div class="md:border-l-2 relative flex pl-2 border-grey-500">
      <router-link to="/dashboard">
        <p class="text-blue-500 flex">
          Hi, <span class="sm:block hidden ml-2">{{ firstname }}</span>
        </p>
      </router-link>
      <router-link to="/cart">
        <img src="../../../assets/icons/shopping.svg" class="ml-4" />
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
          {{ total_cart }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
import decodeJwtToken from "@/utils/jwtDecode";
import { getMyCartsAPI } from "@/actions/cart";

export default {
  name: "NavbarLogin",
  data() {
    return {
      firstname: "",
      total_cart: 0,
    };
  },
  mounted() {
    const { fullname } = decodeJwtToken();
    this.firstname = fullname.split(" ")[0] || fullname;
    const getTotalCart = async () => {
      const response = await getMyCartsAPI(this.$store.state.token);
      this.total_cart = response?.data?.products?.length || 0;
    };
    getTotalCart();
  },
};
</script>

<style scoped>
</style>