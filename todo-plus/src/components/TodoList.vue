<template>
  <div class="todo-list">
    <ul :style="{ width: `${todos.length * 100}%` }">
      <li v-for="todo in todoStore.todos"></li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useTodoStore } from '../store.js'

const todoStore = useTodoStore()
</script>
<style scoped></style>
