import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VCalendar from "v-calendar";

// https://www.npmjs.com/package/vue-code-highlight
import VueCodeHighlight from "vue-code-highlight";
import "vue-code-highlight/themes/prism-okaidia.css";

Vue.use(VueCodeHighlight);
Vue.use(VCalendar);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
