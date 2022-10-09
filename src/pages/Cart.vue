<template>
  <Layout>
    <p class="text-blue-500"><span class="text-grey-600">Home / </span>Cart</p>
    <section class="border-b-2 border-grey-500">
      <section class="flex mt-6 mb-7">
        <img
          src="../../public/image/newproduct1.jpg"
          class="sm:w-40 sm:h-20 w-36 h-16 rounded-lg object-cover"
        />
        <div class="ml-3.5">
          <h2 class="text-blue-500">Sofa ternyaman</h2>
          <p class="text-grey-600 text-sm">Rp4.000.000 | by Amienul</p>
          <div class="flex border-2 border-grey-500 w-max px-2 rounded-md mt-2">
            <button class="border-none bg-transparent w-7 text-grey-600">
              <font-awesome-icon icon="minus" />
            </button>
            <p class="text-grey-600 mx-4">1</p>
            <button class="border-none bg-transparent w-7 text-grey-600">
              <font-awesome-icon icon="plus" />
            </button>
          </div>
        </div>
      </section>
    </section>
    <section class="mt-7 mb-24">
      <h2 class="text-blue-500 mb-4 font-bold">Shipping Details</h2>
      <Input label="Your Address" class="mb-6" />
      <div class="md:grid-cols-3 grid gap-3 grid-cols-1 mb-6">
        <Input label="Province" />
        <Input label="City" />
        <Input label="Postal Code" />
      </div>
      <div class="md:grid-cols-2 grid gap-4 grid-cols-1 mb-6">
        <Input label="Country" />
        <Input label="Mobile" />
      </div>
    </section>
    <section class="mb-24">
      <h2 class="text-blue-500 mb-4 font-bold">Payments Information</h2>
    </section>
  </Layout>
</template>

<script>
import Layout from "../components/Layout";
import Input from "../components/element/Input.vue";
export default {
  name: "Cart",
  components: { Layout, Input },
};
</script>

<style scoped>
</style>