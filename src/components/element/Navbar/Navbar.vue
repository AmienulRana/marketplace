<template>
  <header>
    <nav class="flex justify-between items-center py-7 relative">
      <img src="../../../assets/icons/logo.svg" />
      <div
        class="
          md:w-auto md:flex-row md:static md:h-0 md:py-0
          flex
          items-center
          pt-6
          pb-6
          h-38
          w-full
          justify-between
          bg-white
          shadow-xl
          flex-col
          absolute
          top-0
          left-0
          duration-300
          ease-in-out
        "
        :class="
          showNavbar
            ? 'translateY-100-custom opacity-100 z-10'
            : '-translateY-full-custom opacity-100 -z-10'
        "
      >
        <ul class="md:flex-row flex flex-col items-center">
          <li :class="getNavbarActive('/')">
            <router-link to="/">Home</router-link>
          </li>
          <li :class="getNavbarActive('/dashboard')">
            <router-link to="/dashboard">dashboard</router-link>
          </li>
          <li :class="getNavbarActive('/redward')">
            <router-link to="/redward">Redward</router-link>
          </li>
          <template v-if="!isLogin">
            <li :class="getNavbarActive('/register')">
              <router-link to="/register">Sign up</router-link>
            </li>
            <li>
              <router-link to="/login">
                <Button text="Sign in" />
              </router-link>
            </li>
          </template>
          <template v-else>
            <li>
              <NavbarLogin class="md:block hidden" />
            </li>
          </template>
        </ul>
      </div>
      <!-- mobile version -->
      <div class="md:hidden flex items-center">
        <NavbarLogin class="md:hidden mr-6" v-if="isLogin" />
        <HamburgerButton @click="handleShowNavbar" />
      </div>
    </nav>
  </header>
</template>

<script>
import Button from "../Button.vue";
import HamburgerButton from "./HamburgerButton.vue";
import NavbarLogin from "./NavbarLogin.vue";
export default {
  name: "Navbar",
  data() {
    return {
      showNavbar: false,
      isLogin: false,
    };
  },
  components: {
    Button,
    HamburgerButton,
    NavbarLogin,
  },
  methods: {
    getNavbarActive(name) {
      let classNavbar = "md:mb-0 md:mr-7 mb-6 ";
      if (name === this.$route.path) {
        return (classNavbar += "text-orange-500 font-bold");
      }
      return (classNavbar += "text-blue-500");
    },
    handleShowNavbar() {
      this.showNavbar = this.showNavbar ? false : true;
    },
  },
  mounted() {
    const checkUserLogin = () => {
      const token = this.$store.state.token || localStorage.getItem("token");
      this.isLogin = token ? true : false;
    };
    checkUserLogin();
  },
};
</script>

<style scoped>
.translateY-100-custom {
  transform: translateY(100px);
}
.-translateY-full-custom {
  transform: translateY(-100%);
}
</style>