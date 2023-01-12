<template>
  <div class="gradient">
    <!-- test gradient -->
    <!-- <p>{{ todos }}1</p>
    <p>{{ todos[0] }}2</p> -->
    <!-- <GradientColor
      v-for="(todo, index) in todoStore.todos"
      :colors="todo.colors"
      :active="index <= currentIndex"
    ></GradientColor> -->
    <GradientColor
      :colors="todoStore.todos[0].colors"
      :active="index <= currentIndex"
    ></GradientColor>
  </div>
</template>

<script setup>
import { ref, reactive, toRef } from 'vue'
import { useTodoStore } from '../store.js'
import GradientColor from './GradientColor.vue'

const todoStore = useTodoStore()
console.log(todoStore.todos)
console.log(todoStore.todos[0])
console.log(todoStore.todos[0].name)

// const todos = toRef(todoStore.todos)
// console.log(todos[0])
// const tasks = todoStore.todayTasks
</script>
<style scoped>
.gradient {
  /* margin: 2rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24rem;
  width: 100%;
  /* position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1; */
}
</style>
