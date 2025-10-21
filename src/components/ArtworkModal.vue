<script setup>

defineProps({

    modalId: { type: String, required: true },
    modalTitle: { type: String, default: "Don't forget your title!" }
})


</script>


<template>






    <!-- Modal -->
    <div class="modal fade" :id="modalId" tabindex="-1" :aria-labelledby="modalId + 'Label'" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">

                <!-- only need above -->
                <div class="modal-header">
                    <h1 class="modal-title fs-5" :id="modalId">{{ modalTitle }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">


                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>




</template>


<style lang="scss" scoped></style>