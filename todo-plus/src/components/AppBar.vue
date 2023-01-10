<template>
  <div class="app-bar">
    <span>
      <i class="fa fa-chevron-left"></i>
    </span>
    <h1>{{ receives.barTitle }}1</h1>
    <span>
      <i class="fa fa-bars"></i>
    </span>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const receives = defineProps(['barTitle'])
const title = receives.barTitle
console.log(title)
</script>
<style scoped>
.app-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  font-size: 15px;
  z-index: 1;
}

h1 {
  display: flex;
  justify-content: center;
}

span {
  padding: 0 20px;
}
</style>
