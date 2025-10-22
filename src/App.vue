<script setup>
import { AppState } from './AppState.js';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
import PageNavigator from './components/PageNavigator.vue';


</script>

<template>
  <header>
    <!-- <Navbar /> -->
  </header>
  <main>
    <RouterView />
  </main>
  <footer class=" text-center bg-green">
    <!-- Made with <i class="mdi mdi-heart text-pink"></i> by CodeWork -->

    <div class="my-2">
      <PageNavigator />
    </div>
  </footer>
</template>

<style lang="scss">
main {

  background-color: skyblue
}
</style>
