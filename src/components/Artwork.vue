<script setup>
import { Art } from '@/models/Art.js';


defineProps({

    artProp: { type: Art, required: true }
})

</script>


<template>

    <div>

        {{ artProp }}


    </div>

</template>


<style lang="scss" scoped></style>