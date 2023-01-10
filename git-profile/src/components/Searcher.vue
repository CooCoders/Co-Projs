<template>
  <div>
    <input type="text" id="iptSearch" placeholder="input the github account" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
</script>
<style scoped>
#iptSearch {
  display: block;
  padding-left: 1rem;
  height: 4rem;
  width: 40rem;
  font-family: Poppins;
  font-size: 2rem;
}
</style>
