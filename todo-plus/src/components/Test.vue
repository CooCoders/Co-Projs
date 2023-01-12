<!-- 测试组件 -->
<template>
  <div class="main">
    <div class="inside">
      <div class="card">1</div>
      <div class="card">2</div>
      <div class="card">3</div>
      <div class="card">4</div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const num1 = 10
const num2 = ref(100)
const num3 = reactive({ val: 1000 })

console.log(num3)
</script>
<style scoped>
.main {
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
}

.inside .card {
  display: flex;
  width: 100px;
  height: 100px;
}
</style>
