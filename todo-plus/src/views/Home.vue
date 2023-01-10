<template>
  <div>
    <AppBarVue :barTitle="TODO"></AppBarVue>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import AppBarVue from '../components/AppBar.vue'
</script>
<style scoped></style>
