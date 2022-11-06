<template>
  <Layout
    title="Detail Transactions"
    text="Big result start from the small one"
  >
    <div class="bg-white rounded-lg h-auto w-full p-10 relative">
      <section class="md:grid-cols-3 md:gap-3 grid grid-cols-1 md:mb-7">
        <section class="w-56 h-56">
          <img src="../../public/image/newproduct1.jpg" class="w-full h-full" />
        </section>
        <section class="md:mt-0 mt-4">
          <p class="md:hidden md:text-xl text-lg text-blue-500 mb-4">
            Infomation Detail
          </p>
          <TextInformation title="Customer Name" value="Amienul" />
          <TextInformation title="Date Transaction" value="12 Januari 2022" />
          <TextInformation title="Total" value="Rp20.000" />
        </section>
        <section>
          <TextInformation title="Product Name" value="Amienul" />
          <TextInformation title="Quantity" value="1" />
          <TextInformation title="Mobile" value="085260298204" />
        </section>
      </section>
      <section class="grid md:gap-2 md:grid-cols-2 grid-cols-1">
        <section>
          <p class="md:text-xl text-lg text-blue-500 mb-4">
            Shipping Infomation
          </p>
          <TextInformation
            title="Location"
            value="Kota Medan, Sumatera utara"
          />
          <div class="grid md:grid-cols-2 grid-cols-1">
            <TextInformation title="Provinsi" value="Sumatera utara" />
            <TextInformation
              title="Postal code"
              value="23414"
              class="md:mr-14"
            />
          </div>
          <TextInformation title="Full address" value="Full Address" />
          <div class="mb-6">
            <p class="text-sm mb-2 text-grey-600">Status</p>
            <Select :options="options" class="md:w-1/2" />
          </div>
        </section>
        <section>
          <p class="md:text-xl text-lg text-blue-500 mb-4">
            Courier Infomation
          </p>
          <TextInformation title="Ekspedisi" value="JNE" />
          <TextInformation title="Service" value="Yakin Esok Sampai" />
          <TextInformation title="Price" value="Rp34.000" />
          <TextInformation title="Estimasi" value="1 - 2 Hari" />
        </section>
      </section>
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout/Dashboard.vue";
import TextInformation from "@/components/organism/TransactionDetail/TextInformation.vue";
import Select from "@/components/element/Select.vue";

export default {
  name: "TransactionDetail",
  data() {
    return {
      options: ["Pending", "Telah diserahkan kurir", "Cancel"],
    };
  },
  components: { Layout, TextInformation, Select },
};
</script>

<style scoped>
</style>