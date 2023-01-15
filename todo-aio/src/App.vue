<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import NeumorphCard from './components/NeumorphCard.vue'

const btnStatus = true
// const cardTitle = 'something to be done'
</script>

<template>
  <header>
    <h3 class="title">Todo Vue</h3>
  </header>
  <div class="container">
    <NeumorphCard title="To be done" :btn="btnStatus"></NeumorphCard>
    <NeumorphCard title="Another item" btn="false"></NeumorphCard>
  </div>
</template>

<style scoped>
header {
  padding: 1.5rem;
}
header .title {
  font-size: 2.25rem;
  text-align: center;
}

.container {
  margin: 0 auto;
  margin-top: 3rem;
  width: 25rem;
}
</style>
