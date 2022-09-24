<template>
  <div class="flex">
    <Sidebar />
    <slot />
  </div>
</template>

<script>
import Sidebar from "../element/Sidebar.vue";
export default {
  name: "DashboardLayout",
  components: { Sidebar },
};
</script>

<style scoped>
</style>