<template>
  <li @click="completeTask(task.text)">
    {{ task.text }} - [{{ task.completed }}]
  </li>
</template>

<script>
export default {
  props: ["task"],
  methods: {
    completeTask(taskText) {
      this.$emit("click-on-task", { text: taskText });
    },
  },
};
</script>

<style scoped></style>
