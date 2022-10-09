import { createApp } from "vue";
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

createApp(App)
  .use(router)
  .use(Toast)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
