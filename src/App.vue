<script setup lang="ts">
import MainNavbarComponent from '@/components/navbars/MainNavbarComponent.vue';
</script>

<template>
    <main-navbar-component />
    <router-view />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
