<script setup lang="ts">
import MainNavbarComponent from '@/components/navbars/MainNavbarComponent.vue';
import AppNavbarComponent from '@/components/navbars/AppNavbarComponent.vue';
</script>

<template>
    <main-navbar-component />
    <app-navbar-component v-if="$route.path.startsWith('/app')" />
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
