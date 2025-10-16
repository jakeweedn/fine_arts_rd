<script setup>
import { AppState } from '@/AppState.js';
import Artwork from '@/components/Artwork.vue';
import Example from '@/components/Example.vue';
import { artService } from '@/services/ArtService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

onMounted(() => {
  logger.log('Home page is unmounted')
  artService.discoverArt()
})

const artworks = computed(() => AppState.arts)

async function discoverArt() {

  try {

    await artService.discoverArt()
  } catch (error) {

    Pop.error(error)

    logger.error('COULD NOT GET ART')
  }


}

</script>

<template>

  <!-- No Propls:   -->
  <!-- <div v-for="art in artwork" :key="art.id">

    <Artwork />

    <!-- {{ art }} -->


  <!-- </div> -->

  <div class="artwork">
    <Artwork v-for="art in artworks" :key="art.id" :artwork="art" />

  </div>



  -->

  <Example />
</template>

<style scoped lang="scss"></style>
