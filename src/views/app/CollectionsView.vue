<script setup lang="ts">
const openAddCollectionModal = () => {
    return;
}
</script>

<template>
    <!-- TODO -->
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="card bg-dark text-light" @click="openAddCollectionModal">
                    <p class="card-text">Russian</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card bg-dark text-light" @click="openAddCollectionModal">
                    <p class="card-text">English</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card bg-dark text-light" @click="openAddCollectionModal">
                    <p class="card-text">Spanish</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card bg-dark text-light" @click="openAddCollectionModal">
                    <p class="card-text">Japanese</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card bg-dark text-light" @click="openAddCollectionModal">
                    <p class="card-text">German</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card bg-dark text-light" @click="openAddCollectionModal">
                    <p class="card-text">Very long name for collection that takes multiple lines</p>
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
