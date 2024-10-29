<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

console.log(route.params);
</script>


<template>
    <h1>CollectionView</h1>
</template>
