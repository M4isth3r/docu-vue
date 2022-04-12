<template>
  <div class="content">

  </div>
</template>

<script>
import todos from "@/logic/todos";

export default {
  methods: {
    // Fake API: https://jsonplaceholder.typicode.com/guide/
    async getTodos() {
      try {
        let response = await todos.get();
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getTodo(id) {
      try {
        let response = await todos.getTodo(id);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async modifyTodos() {
      let todo = {
        userId: 1,
        id: 1,
        title: 'Do homework',
        completed: true
      };
      try {
        let response = await todos.update(todo)
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
      this.getTodos();
      this.getTodo(1);
      this.modifyTodos();
  },
};
</script>

<style scoped></style>
