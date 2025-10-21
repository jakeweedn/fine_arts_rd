<script setup>
import { Artwork } from '@/models/Artwork.js';
import { artworkService } from '@/services/ArtworkService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';

defineProps({ artwork: Artwork })


async function likeArtwork(artworkId) {

    try {


        logger.log('Liking this artwork...', artworkId)
        await artworkService.likeArtwork(artworkId)

    }
    catch (error) {

        Pop.error(error)
        logger.error('COULD NOT LIKE ARTWORK', error)




    }


}

</script>


<template>
    <!-- Remember difference between argument and parameter! -->

    <div class="col-md-6">
        <!-- <h1> {{ artwork.slug }} </h1> -->
        <div>
            <div class="my-2">
                <img :src="artwork.imgUrl" :alt="artwork.height" data-bs-toggle="modal"
                    :data-bs-target="`#${artwork.id}`">
            </div>

            <div class="my-2 text-center">
                <button @click="likeArtwork(artwork.id)"> Like 👍 </button>
                <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#artwork-modal"> More info
        </button> -->
            </div>

            <!-- <h3> Admirers </h3>
        <div v-for="admirer in artwork.admirers" :key="admirer.id">
            <p> {{ admirer.name }}</p>
        </div> -->
        </div>


    </div>



</template>


<style lang="scss" scoped></style>