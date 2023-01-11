<template>
  <div class="gradient">
    test gradient
    <!-- <p>{{ todos }}1</p>
    <p>{{ todos[0] }}2</p> -->
    <!-- <GradientColor
      v-for="(todo, index) in todos"
      :colors="todo.colors"
      :active="index <= currentIndex"
    ></GradientColor> -->
  </div>
</template>

<script setup>
import { ref, reactive, toRef } from 'vue'
import { useTodoStore } from '../store.js'
import GradientColor from './GradientColor.vue'

const todoStore = useTodoStore()
// const todos = toRef(todoStore.todos)
// console.log(todos[0])
// const tasks = todoStore.todayTasks
</script>
<style scoped></style>
