<template>
  <div id="todo-list-componet">
    <todo-add-component @add-new-task="addNewTask"></todo-add-component>
    <div class="list">
      <ul>
        <todo-item-component
          class="task"
          v-for="(task, index) in tasks"
          :task="task"
          :key="index"
          :class="{ completed: task.completed }"
          @click-on-task="completeTask"
        >
          {{ task.text }}
        </todo-item-component>
      </ul>
    </div>
  </div>
</template>

<script>
import TodoItemComponent from "@/components/TodoItemComponent";
import TodoAddComponent from "@/components/TodoAddComponent";

export default {
  components: {
    TodoItemComponent,
    TodoAddComponent,
  },
  data: () => ({
    newTask: "",
    tasks: [{ text: "aprender vue", completed: false }],
  }),
  methods: {
    addNewTask(task) {
      this.tasks.push(task);
    },
    completeTask(task) {
      let taskFound = this.tasks.find((value) => value.text === task.text);
      if (taskFound !== undefined) {
        taskFound.completed = !taskFound.completed;
      }
    },
    print() {
      console.log("Hola Mundo!");
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: content-box;
  margin: 0;
  padding: 0;
}

.list {
  margin: auto;
  margin-top: 40px;
  padding: 30px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: none;
  width: 300px;
}

ul {
  list-style-type: none;
}

.task {
  cursor: pointer;
  margin: 10px 0;
}

.completed {
  text-decoration: line-through;
  color: grey;
}
</style>
