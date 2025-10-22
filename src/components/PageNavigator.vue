<script setup>
import { AppState } from '@/AppState.js';
import { artworkService } from '@/services/ArtworkService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';




const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)

//No props needed, no model

//Function to change pages:

//Don't think I need search stuff for lab. If I want to get rid, just get rid of searchTerm in AppState and the if else statement in my function.  

async function changePage(pageNumber) {

    try {
        logger.log('Changing page to ' + pageNumber)
        //if user hasn't searched anything:
        if (AppState.searchTerm == '') {

            await artworkService.changeDiscoverPage(pageNumber)
        }

        else {

            await artworkService.changeSearchPage(pageNumber, AppState.searchTerm)
        }

    }
    catch (error) {

        Pop.error(error)
        logger.error('COULD NOT CHANGE PAGE', error)


    }
}


</script>


<template>


    <div class="d-flex flex-column justify-content-between mx-2">
        <div>
            <p> 📖{{ currentPage }} of {{ totalPages }} </p>

        </div>
        <div>
            <p> <button @click="changePage(currentPage - 1)" type="button" :disabled="currentPage < 2"
                    class="btn btn-light rounded-pill"> Previous</button>
            </p>
            <p> <button @click="changePage(currentPage + 1)" type="button" :disabled="currentPage == totalPages"
                    class="btn btn-light rounded-pill"> Next </button> </p>
        </div>


    </div>


</template>


<style lang="scss" scoped></style>