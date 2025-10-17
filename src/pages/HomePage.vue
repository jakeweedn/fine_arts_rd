<script setup>
import { AppState } from '@/AppState.js';
import ArtworkCard from '@/components/ArtworkCard.vue';
import Example from '@/components/Example.vue';

import { artworkService } from '@/services/ArtworkService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

onMounted(() => {
  logger.log('Home page is unmounted')
  artworkService.discoverArt()
})

const artworks = computed(() => AppState.artworks)

async function discoverArt() {

  try {

    await artworkService.discoverArt()
  } catch (error) {

    Pop.error(error)

    logger.error('COULD NOT GET ART')
  }


}

</script>

<template>



  <h1>hello </h1>


  <div v-for="artwork in artworks" :key="artwork.id">


    <ArtworkCard :artwork="artwork" />

  </div>





  <Example />
</template>

<style scoped lang="scss"></style>
