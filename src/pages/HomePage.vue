<script setup>
import { AppState } from '@/AppState.js';
import ArtworkCard from '@/components/ArtworkCard.vue';
import ArtworkModal from '@/components/ArtworkModal.vue';

import Example from '@/components/Example.vue';
import Login from '@/components/Login.vue';
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







  <section>
    <section class="row">
      <div class="col-md-2 border my-2">
        <div class="my-2">
          <Login />
        </div>
        <div class="page-navigator">
          <PageNavigator />
        </div>

      </div>




      <!-- <h1 class="text-center">Fine Arts </h1>
  <div class="d-flex justify-content-end mx-2">
    <div>
      <p> Current Page: {{ currentPage }}</p>
      <p> Total Pages: {{ totalPages }}</p>
    </div>
  </div> -->





      <div class="col-md-10">
        <h3 class="noto-serif-jp-yes"> Codeworks Institute of Art</h3>
        <section class="row">
          <div v-for="artwork in artworks" :key="artwork.id" class="col-md-3">


            <ArtworkCard :artwork="artwork" />

            <ArtworkModal :modalId=artwork.id modalTitle="Artwork" :artwork="artwork" />

          </div>
        </section>

      </div>
    </section>
  </section>


  <!-- <Example /> -->
</template>

<style scoped lang="scss">
// .open-sans-coolio {
//   font-family: "Open Sans", sans-serif;
//   font-optical-sizing: auto;
//   font-weight: 300px;
//   font-style: normal;
//   font-variation-settings:
//     "wdth" 100;
// }



.noto-serif-jp-yes {
  font-family: "Noto Serif JP", serif;
  font-optical-sizing: auto;
  font-weight: 300px;
  font-style: normal;
}

// @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');



@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');



.page-navigator {
  position: relative;
  top: 400px
}
</style>