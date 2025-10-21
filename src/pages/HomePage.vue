<script setup>
import { AppState } from '@/AppState.js';
import ArtworkCard from '@/components/ArtworkCard.vue';
import ArtworkModal from '@/components/ArtworkModal.vue';

import Example from '@/components/Example.vue';
import PageNavigator from '@/components/PageNavigator.vue';


import { artworkService } from '@/services/ArtworkService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

onMounted(() => {
  logger.log('Home page is unmounted')
  artworkService.discoverArt()
})

const artworks = computed(() => AppState.artworks)

// const currentPage = computed(() => AppState.currentPage)
// const totalPages = computed(() => AppState.totalPages)



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

  <h1 class="text-center"> Fine Arts </h1>






  <PageNavigator />




  <!-- <h1 class="text-center">Fine Arts </h1>
  <div class="d-flex justify-content-end mx-2">
    <div>
      <p> Current Page: {{ currentPage }}</p>
      <p> Total Pages: {{ totalPages }}</p>
    </div>
  </div> -->





  <div>
    <div v-for="artwork in artworks" :key="artwork.id">


      <ArtworkCard :artwork="artwork" />

      <ArtworkModal :modalId=artwork.id modalTitle="Artwork" :artwork="artwork" />

    </div>
  </div>


  <Example />
</template>

<style scoped lang="scss"></style>
