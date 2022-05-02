import Vue from "vue";
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: name => `The field ${name} is required.`
});
extend('email', {
  ...email,
  message: name => `The ${name} format is invalid.`
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
