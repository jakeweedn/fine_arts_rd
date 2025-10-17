<script setup>
import { Artwork } from '@/models/Artwork.js';

defineProps({ artwork: Artwork })

</script>


<template>

    <h1> {{ artwork.slug }} </h1>

    <img :src="artwork.imgUrl" :alt="artwork.height">



</template>


<style lang="scss" scoped></style>