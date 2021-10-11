<template>
  <div id="todo-list-componet">
    <form class="form" @submit.prevent="createTask">
      <label class="label" for="task">Nueva tarea: </label>
      <input class="input" type="text" v-model="newTask" id="task" />
      <input class="button" type="submit" value="Craer tarea" />
    </form>

    <div class="list">
      <ul>
        <li
          class="task"
          v-for="(task, i) in tasks"
          :key="`task ${i}`"
          :class="{completed: task.completed}"
          @click="completeTask(task.text)"
        >{{ task.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    newTask: "",
    tasks: [],
  }),
  methods: {
    createTask() {
      let task = {
        text: this.newTask,
        completed: false,
      };
      this.tasks.push(task);
      this.newTask = "";
      console.log(this.tasks);
    },
    completeTask(taskText) {
      let task = this.tasks.find((value) => value.text === taskText);
      if (task !== undefined) {
        task.completed = !task.completed;
      }
    }
  },
};
</script>

<style scoped>
* {
  box-sizing: content-box;
  margin: 0;
  padding: 0;
}

.form {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0px 10px 22px -1px rgba(0,0,0,0.25);
  margin-top: 10px;
  width: 600px;
  margin: auto;
}

input {
  margin-right: 5px;
}

.input {
  padding: 5px;
}
.button {
  margin-left: 20px;
  height: 35px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .2);
  background-color: #2ecc71;
  color: black;
  cursor: pointer;
  padding: 5px;
}

.list {
  margin: auto;
  margin-top: 40px;
  padding: 30px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .2);
  border-radius: 5px;
  border: none;
  width: 600px;
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
