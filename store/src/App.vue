<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>
<template>
  <div class="container py-3">
    <NavBar />
    <main class="border border-top-0 p-3 rounded-bottom">
      <RouterView></RouterView>
    </main>

  </div>
</template>
<style scoped>
main {
  min-height: 700px;
}
</style>