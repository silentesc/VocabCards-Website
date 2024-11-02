<script setup lang="ts">
import { ref } from 'vue';

const collection = ref({
    id: 1,
    name: "Russian",
    vocables: [
        {
            id: 1,
            front: "Front",
            back: "Back",
            info: "Info for Vocabulary",
            times_solved: 122,
            times_failed: 43,
            avg_millis_to_solve: 4.2,
            last_review_timestamp: new Date("2023-11-22T13:37:00Z"),
            next_review_timestamp: new Date("2023-11-22T13:37:00Z"),
            created_timestamp: new Date("2023-11-22T13:37:00Z"),
            updated_timestamp: new Date("2023-11-22T13:37:00Z"),
        },
        {
            id: 2,
            front: "Front2",
            back: "Back2",
            info: "Info for Vocabulary",
            times_solved: 434,
            times_failed: 210,
            avg_millis_to_solve: 7.6,
            last_review_timestamp: new Date("2023-11-22T13:37:00Z"),
            next_review_timestamp: new Date("2023-11-22T13:37:00Z"),
            created_timestamp: new Date("2023-11-22T13:37:00Z"),
            updated_timestamp: new Date("2023-11-22T13:37:00Z"),
        },
        {
            id: 3,
            front: "Front3",
            back: "Back3",
            info: "Info for Vocabulary",
            times_solved: 1023,
            times_failed: 32,
            avg_millis_to_solve: 0.8,
            last_review_timestamp: new Date("2023-11-22T13:37:00Z"),
            next_review_timestamp: new Date("2023-11-22T13:37:00Z"),
            created_timestamp: new Date("2023-11-22T13:37:00Z"),
            updated_timestamp: new Date("2023-11-22T13:37:00Z"),
        },
    ]
});

/* Methods */
const openVocable = (vocableId: number) => {
    console.log("Opening vocable", vocableId);
}
</script>

<template>
    <h1>{{ collection.name }}</h1>

    <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action"
            v-for="vocable in collection.vocables" :key="vocable.id" @click="openVocable(vocable.id)">
            {{ vocable.front }}
        </button>
    </div>
</template>

<style scoped>
.list-group {
    margin: 1em;
}

.list-group-item {
    max-width: 750px;
    margin: auto;
    display: flex;
    justify-content: center;
    background-color: #464c55;
    color: #fff;
}
.list-group-item:hover {
    background-color: #606874;
    color: white;
}
.list-group-item:focus {
    background-color: #606874;
    color: white;
}
</style>
