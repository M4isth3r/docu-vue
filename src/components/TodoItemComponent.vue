<template>
  <li @click="completeTask(task.text)">
    [{{ task.completed }}] - {{ task.text }}
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
