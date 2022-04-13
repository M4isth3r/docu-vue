<template>
  <div class="form">
    <!-- <label class="label" for="task">Nueva tarea: </label>
    <input type="text" v-model="text" />
    <button class="button" @click="createTask">Crear tarea</button> -->
    <custom-searcher @search-value="createTask">
      <!-- <img :src="cactus.src" :alt="cactus.alt" /> -->
    </custom-searcher>
  </div>
</template>

<script>
import CustomSearcher from "../components/common/CustomSearcher.vue";

export default {
  components: {
    CustomSearcher
  },
  data: () => ({}),
  methods: {
    createTask(newTask) {
      if (newTask.length > 0) {
        let task = {
          text: newTask,
          completed: false,
        };
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
  width: 300px;
  margin: auto;
}

input {
  margin-right: 5px;
  padding: 5px;
}
</style>
