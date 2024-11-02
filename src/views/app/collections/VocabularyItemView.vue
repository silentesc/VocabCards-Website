<script setup lang="ts">
import { ref } from 'vue';

const vocabularyItem = ref({
    id: 1,
    front: "Front",
    back: "Back",
    info: "Info for Vocabulary Item",
    times_solved: 122,
    times_failed: 43,
    avg_millis_to_solve: 4.2,
    last_review_timestamp: new Date("2023-11-22T13:37:00Z"),
    next_review_timestamp: new Date("2023-11-22T13:37:00Z"),
    created_timestamp: new Date("2023-11-22T13:37:00Z"),
    updated_timestamp: new Date("2023-11-22T13:37:00Z"),
});
</script>

<template>
    <!-- Front card -->
    <h3>Front</h3>
    <div class="card-container">
        <div class="card">
            <div class="card-body">
                <textarea type="text" class="card-text" v-text="vocabularyItem.front" />
            </div>
        </div>
    </div>

    <!-- Back card -->
    <h3>Back</h3>
    <div class="card-container">
        <div class="card">
            <div class="card-body">
                <textarea type="text" class="card-text" v-text="vocabularyItem.back" />
            </div>
        </div>
    </div>

    <!-- Card info -->
    <h3>Card info</h3>
    <div class="card-container">
        <div class="card">
            <div class="card-body">
                <textarea type="text" class="card-text" v-text="vocabularyItem.info" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    margin: 0px 10px 10px 10px;
    width: 100%;
    height: 250px;
    max-width: 400px;
    background-color: #606874;
    color: #fff;
}

.card-text {
    width: 100%;
    height: 100%;
    background-color: #606874;
    color: #fff;
    border: none;
    outline: none;
    resize: none;
    text-align: center;
}

h3 {
    margin: 10px 0px 0px 0px;
}
</style>
