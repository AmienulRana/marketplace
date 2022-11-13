import { getMyCartsAPI } from "@/actions/cart";
import { createStore } from "vuex";
import location from "./modules/location";

const store = createStore({
  state() {
    return {
      token: undefined,
      total_cart: 0,
    };
  },
  mutations: {
    storeTheToken(state, payload) {
      state.token = payload;
    },
    removeTheToken(state) {
      state.token = undefined;
    },
    setTotalCart(state, payload){
      state.total_cart = payload;
    }
  },
  actions:{
    async getTotalCart(context){
      const response = await getMyCartsAPI(this.state.token); 
      return context.commit('setTotalCart', response?.data?.products?.length || 0);
    }
  },
  modules: {
    location,
  },
});

export default store;
