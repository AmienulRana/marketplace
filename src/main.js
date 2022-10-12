import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import "./assets/styles/index.css";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLocationDot,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

library.add(faMinus, faPlus, faLocationDot);

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
});

createApp(App)
  .use(router)
  .use(store)
  .use(Toast)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
