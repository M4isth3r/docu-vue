import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vue2Filters from 'vue2-filters'
// https://www.npmjs.com/package/vue-code-highlight
import VueCodeHighlight from "vue-code-highlight";
import "vue-code-highlight/themes/prism-okaidia.css";
import VueLazyload from 'vue-lazyload';
import "./filters.js";
import "./directives/directives.js";
import "./vee-validate/rules.js";

Vue.use(VueCodeHighlight);
Vue.use(Vue2Filters);
Vue.use(VueLazyload);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
