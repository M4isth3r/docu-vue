import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VCalendar from "v-calendar";
// https://www.npmjs.com/package/vue-code-highlight
import VueCodeHighlight from "vue-code-highlight";
import "vue-code-highlight/themes/prism-okaidia.css";
// https://bootstrap-vue.org/docs
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueCodeHighlight);
Vue.use(VCalendar);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
