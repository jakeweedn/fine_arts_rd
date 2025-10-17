<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';




const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)

//No props needed, no model


</script>


<template>

    <h1 class="text-center">Fine Arts </h1>
    <div class="d-flex justify-content-end mx-2">
        <div>
            <p> Current Page: {{ currentPage }} </p>
            <p> Total Pages: {{ totalPages }} </p>
        </div>
    </div>

</template>


<style lang="scss" scoped></style>