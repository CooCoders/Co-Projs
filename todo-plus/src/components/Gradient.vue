<template>
  <div class="gradient">
    <GradientColor v-for="(todo, index) in todos"></GradientColor>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useTodoStore } from '../store.js'
import GradientColor from './GradientColor.vue'

const todoStore = useTodoStore()

const tasks = todoStore.todayTasks
</script>
<style scoped></style>
