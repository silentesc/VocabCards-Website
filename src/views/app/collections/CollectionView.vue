<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const collection = ref({
    id: 1,
    name: "Russian",
    vocabularyItems: [
        {
            id: 1,
            front: "Front",
        },
        {
            id: 2,
            front: "Front2",
        },
        {
            id: 3,
            front: "Front3",
        },
    ]
});

/* Methods */
const openAddocabularyItemModal = () => {
    return;
}

const openVocabularyItem = (vocabularyItemId: number) => {
    router.push({ name: "VocabularyItemView", params: { collectionId: route.params.collectionId, vocabularyItemId: vocabularyItemId } });
}
</script>

<template>
    <h1>{{ collection.name }}</h1>

    <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action" v-for="vocable in collection.vocabularyItems"
            :key="vocable.id" @click="openVocabularyItem(vocable.id)">
            {{ vocable.front }}
        </button>
    </div>
    <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action list-group-item-add"
            @click="openAddocabularyItemModal">
            <h4>+</h4>
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

.list-group-item-add {
    background-color: #565d68;
}

.list-group-item-add h4 {
    margin: 0;
    padding: 0;
}
</style>
