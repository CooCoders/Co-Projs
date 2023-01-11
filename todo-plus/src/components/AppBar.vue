<template>
  <div class="app-bar">
    <span>
      <!-- 这里直接使用 awesome 矢量字体图标 在 style.css 文件中引入 -->
      <i class="fa fa-chevron-left"></i>
    </span>
    <h1>{{ title }}</h1>
    <span>
      <i class="fa fa-bars"></i>
    </span>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const receives = defineProps(['title'])
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

.app-bar h1 {
  display: flex;
  justify-content: center;
  font-family: Poppins, sans-serif;
  font-weight: bolder;
}

span {
  padding: 0 20px;
}
</style>
