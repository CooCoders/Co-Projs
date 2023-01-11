<template>
  <div class="avatar">
    <div class="avatar_face">
      <img src="../assets/avatar.png" alt="Avatar face" />
    </div>
    <h2 class="avatar_name">Hello, Jane</h2>
    <p class="avatar_tips">
      Looks like feed good. <br />
      you have XX tasks to do today.
    </p>
    <p class="avatar_date">Today: xxxxx</p>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
</script>
<style scoped>
.avatar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 2rem;
  height: 14rem;
  background-color: #e9c6c6;
}

.avatar_face {
  margin-top: 0.5rem;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.avatar_face img {
  height: 100%;
  width: 100%;
}

.avatar_name {
  margin-top: 0.5rem;
  font-size: 32px;
  font-family: Poppins, sans-serif;
  font-weight: 600;
}

.avatar_tips {
  margin-top: 0.5rem;
  font-size: 13px;
  overflow: hidden;
}

.avatart_date {
  display: block;
  padding-top: 0.5rem;
}
</style>
