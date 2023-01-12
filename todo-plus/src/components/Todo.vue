<template>
  <div class="todo">
    <div class="todo_head">
      <div class="todo_icon">
        <i :class="['fa', `fa-${todo.icon}`]"></i>
      </div>
      <div class="todo_menu">
        <i class="'fa' `fa-ellipsis-v`"></i>
      </div>
    </div>
    <div class="todo_body">
      <p class="todo_tips">{{ todos. }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
</script>
<style scoped></style>
