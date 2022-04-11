<template>
  <div class="about">
    <img :src="source" :style="styleObject" />
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    source:
      "https://upload.wikimedia.org/wikipedia/en/2/22/Heckert_GNU_white.svg",
    styleObject: {
      width: "150px",
    },
  }),
};
</script>
