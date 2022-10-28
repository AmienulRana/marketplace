const location = {
  state: () => ({
    provinsi: "",
    postal_code: "",
    provinsi_id: "",
    lokasi_id: "",
    nama_lokasi: "",
  }),
  mutations: {
    fillLocation(state, payload) {
      state.provinsi = payload.provinsi;
      state.postal_code = payload.postal_code;
      state.provinsi_id = payload.id_provinsi;
      state.lokasi_id = payload.id_lokasi;
      state.nama_lokasi = payload.nama_lokasi;
    },
  },
};

export default location;
