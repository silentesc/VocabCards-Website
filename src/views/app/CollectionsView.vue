<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const collections = ref([
    {
        id: 1,
        name: "Russian",
    },
    {
        id: 2,
        name: "English",
    },
    {
        id: 3,
        name: "Spanish",
    },
    {
        id: 4,
        name: "Japanese",
    },
    {
        id: 5,
        name: "German",
    },
    {
        id: 6,
        name: "Very long name for collection that takes multiple lines",
    },
]);

/* Methods */
const openAddCollectionModal = () => {
    return;
}

const openCollection = (collectionId: number) => {
    router.push({ name: "CollectionView", params: { id: collectionId } });
}
</script>

<template>
    <!-- TODO -->
    <div class="container">
        <div class="row">
            <div class="col-md-3" v-for="collection in collections" :key="collection.id">
                <div class="card bg-dark text-light" @click="openCollection(collection.id)">
                    <p class="card-text">{{ collection.name }}</p>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card add-collection-card text-light" @click="openAddCollectionModal">
                    <h1 class="card-text">+</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    justify-content: center;
    margin: 0.5em;
    padding: 0.5em;
    height: 5em;
    font-size: 1.3em;
    cursor: pointer;
}

.add-collection-card {
    background-color: #2d3338;
}
</style>
