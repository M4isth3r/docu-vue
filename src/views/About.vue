<template>
  <div class="about">
    <img :src="source" :style="styleObject" />
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    source:
      "https://upload.wikimedia.org/wikipedia/en/2/22/Heckert_GNU_white.svg",
    styleObject: {
      width: "150px",
    },
  }),
};
</script>
