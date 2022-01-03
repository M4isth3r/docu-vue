<template>
  <div id="todo-list" class="container">
    <todo-list-component></todo-list-component>
  </div>
</template>

<script>
import TodoListComponent from "@/components/TodoListComponent";

export default {
  name: "TodoList",
  components: {
    TodoListComponent,
  },
  data: () => ({}),
};
</script>
