<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <h2>Vue.js + VeeValidate - Form Validation</h2>
        <ValidationProvider name="First Name" rules="required" v-slot="{ errors }">
          <label for="firstName">First Name:</label>
          <VDocuInput id="firstName" v-model="firstName" />
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider name="Last Name" rules="required" v-slot="{ errors }">
          <label for="lastName">Last Name:</label>
          <VDocuInput id="lastName" v-model="lastName" />
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
          <label for="email">Email: </label>
          <VDocuInput id="email" v-model="email" />
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>
        <button type="submit">Submit</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import VDocuInput from "@/components/common/VDocuInput.vue";
export default {
  name: "VDocueVeeValidate",
  components: {
    VDocuInput,
  },
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
  }),
  methods: {
    onSubmit() {
      alert("Success!! :-) Form has been submitted!");
    },
  },
};
</script>

<style scoped>
span {
  display: block;
}
</style>
