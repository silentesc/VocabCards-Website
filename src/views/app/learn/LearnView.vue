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

const isFlipped = ref(false);

/* Methods */
const flipCard = () => {
    isFlipped.value = !isFlipped.value;
};
</script>

<template>
    <div class="card-container">
        <div class="card" @click="flipCard">
            <!-- Front of the Card -->
            <div v-if="!isFlipped" class="card-body">
                <p class="card-text">{{ vocabularyItem.front }}</p>
            </div>

            <!-- Back of the Card -->
            <div v-if="isFlipped" class="card-body">
                <p class="card-text">{{ vocabularyItem.back }}</p>
            </div>
        </div>
    </div>
    <button class="btn btn-wrong">Wrong</button>
    <button class="btn btn-correct">Correct</button>
</template>

<style scoped>
.card-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    margin: 10px;
    width: 100%;
    height: 250px;
    max-width: 400px;
    background-color: #606874;
    color: #fff;
    cursor: pointer;
    user-select: none;
}

.btn {
    background-color: #606874;
    color: #fff;
    margin: 5px 12px;
}

.btn-wrong {
    background-color: #cc4b4b;
}
.btn-wrong:hover {
    background-color: #df5c5c;
}

.btn-correct {
    background-color: #47c46d;
}
.btn-correct:hover {
    background-color: #57d66c;
}
</style>
