<template>
  <div></div>
</template>

<script>
export default {
  name: "VDocuUserProfile",
  props: ["gender"],
  data: function () {
    return {
      data: [],
    };
  },
  methods: {
    getAPIUrl: function () {
      const url = new URL("https://randomuser.me/api/");
      const isValidGender = ["male", "female"].includes(this.gender);

      if (isValidGender) {
        url.searchParams.append("gender", this.gender);
      }

      return url;
    },
    fetchData: function() {
      const url = this.getAPIUrl();

      fetch(url)
      .then(response => response.json())
      .then(data => {
        this.data = data
        .find(user => user !== undefined)
        .map(user =>)
      })
    }
  },
};
</script>

<style scoped></style>
