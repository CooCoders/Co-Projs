<template>
  <li class="item">
    <span class="text">{{ text }}</span>
    <input v-if="!hasDone" type="checkbox" />
  </li>
</template>

<script setup>
import { ref, reactive } from 'vue'

const rec = defineProps(['hasDone', 'text'])
</script>
<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 2rem;
}

.item > .text {
  transition: all 0.3s ease-in-out;
}

.done-item > .text {
  text-decoration: line-through;
}
</style>
