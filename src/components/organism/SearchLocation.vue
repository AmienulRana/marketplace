<template>
  <div class="relative">
    <Input
      :label="label"
      :modelValue="location"
      @update:modelValue="(newValue, event) => searchPlace(newValue, event)"
    />
    <div
      class="
        absolute
        top-full
        rounded-md
        left-0
        w-full
        bg-white
        py-2
        shadow-lg
        overflow-y-scroll
        max-h-44
      "
      v-if="query.length > 0"
    >
      <template v-if="query.length < 3">
        <Loading />
      </template>
      <p
        v-if="locationsPrediction.length < 1 && query.length >= 3"
        class="text-red-400 px-6"
      >
        404 : Sorry the location you are looking for is not in our disytem
      </p>
      <p
        class="cursor-pointer px-6 text-grey-600 mb-4 hover:bg-grey-500"
        v-for="prediction in locationsPrediction"
        :key="prediction._id"
        @click="handleSelectLocation(prediction)"
      >
        <font-awesome-icon icon="fa-location-dot" class="mr-2" />
        {{ prediction?.nama_lokasi }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
import Input from "../element/Input.vue";
import Loading from "../element/Loading.vue";

export default {
  name: "SearchLocation",
  components: { Input, Loading },
  props: {
    label: String,
    getLocationUser: {
      type: Function,
    },
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      query: "",
      locations: [],
      locationsPrediction: [],
      location: this.$store.state.location.nama_lokasi,
    };
  },
  methods: {
    searchPlace(inputQuery) {
      this.query = inputQuery;

      if (this.query.length >= 3) {
        const searchLocation = this.locations.filter((location) =>
          location.nama_lokasi.toLowerCase().includes(this.query.toLowerCase())
        );

        this.locationsPrediction = searchLocation.splice(0, 5);
      } else {
        this.locationsPrediction = [];
      }
    },
    handleSelectLocation(location) {
      this.locationsPrediction = [];
      this.query = "";
      this.$store.commit("fillLocation", location);
      this.location = this.$store.state.location.nama_lokasi;
      this.getLocationUser && this.getLocationUser(location);
    },
  },
  mounted() {
    const getLocation = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/location"
        );
        this.locations = response?.data;
      } catch (err) {
        this.toast.error("Gagal mengambil Lokasi, silahkan hubungi developer");
      }
    };
    getLocation();
  },
};
</script>

<style scoped>
</style>