<template>
  <div class="form">
    <label class="label" for="task">Nueva tarea: </label>
    <input type="text" v-model="text" />
    <button class="button" @click="createTask">Crear tarea</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: "",
  }),
  methods: {
    createTask() {
      if (this.text.length > 0) {
        let task = {
          text: this.text,
          completed: false,
        };
        this.text = "";
        this.$emit("add-new-task", task);
      }
    },
  },
};
</script>

<style scoped>
.form {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0px 10px 22px -1px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  width: 400px;
  margin: auto;
}

input {
  margin-right: 5px;
  padding: 5px;
}

.button {
  margin-left: 20px;
  height: 35px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  background-color: #2ecc71;
  color: black;
  cursor: pointer;
  padding: 5px;
}
</style>
