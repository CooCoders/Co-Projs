<template>
  <div>
    <form action="#">
      <input
        type="text"
        id="iptSearch"
        placeholder="input the github account"
      />
    </form>
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
  background-color: #4c2885;
  border: none;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05);
}

#iptSearch::placeholder {
  color: #bbb;
}

#iptSearch:focus {
  outline: none;
  color: #fff;
}
</style>
