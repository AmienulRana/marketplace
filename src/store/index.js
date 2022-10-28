import { createStore } from "vuex";
import location from "./modules/location";

const store = createStore({
  state() {
    return {
      token: undefined,
    };
  },
  mutations: {
    storeTheToken(state, payload) {
      state.token = payload;
    },
    removeTheToken(state) {
      state.token = undefined;
    },
  },
  modules: {
    location,
  },
});

export default store;
