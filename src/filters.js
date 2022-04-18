import Vue from "vue";
const dayjs = require("dayjs");

/**
 * Documentación FILTERS
 * Librería de filtros recomendad: https://github.com/freearhey/vue2-filters
 * Librería para Date: https://github.com/iamkun/dayj
*/

Vue.filter("date", (value) => {
  return dayjs(value).format("DD-MM-YYYY h:mm:ss A");
});
