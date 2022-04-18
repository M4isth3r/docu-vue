import Vue from 'vue'

Vue.directive('focus', {
  inserted: function(el) {
    el.focus();
  }
});

Vue.directive('color', {
  inserted: function(el, binding) {
    el.style.color = binding.value;
  }
});


