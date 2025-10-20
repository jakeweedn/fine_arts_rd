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

    <div>
        <h1> {{ artwork.slug }} </h1>

        <img :src="artwork.imgUrl" :alt="artwork.height">

        <button @click="likeArtwork(artwork.id)"> Like 👍 </button>

        <h3> Admirers </h3>
        <div v-for="admirer in artwork.admirers" :key="admirer.id">
            <p> {{ admirer.name }}</p>
        </div>



    </div>



</template>


<style lang="scss" scoped></style>