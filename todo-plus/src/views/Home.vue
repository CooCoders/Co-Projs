<template>
  <div class="home">
    <AppBarVue title="TODO"></AppBarVue>
    <AvatarVue></AvatarVue>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import AppBarVue from '../components/AppBar.vue'
import AvatarVue from '../components/Avatar.vue'
</script>
<style scoped>
.home {
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: #000;
}
</style>
