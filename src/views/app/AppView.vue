<script setup lang="ts">
import { ref } from 'vue';

import AppNavbarComponent from '@/components/navbars/AppNavbarComponent.vue';
import CollectionComponent from '@/components/app-tabs/CollectionComponent.vue';
import LearnComponent from '@/components/app-tabs/LearnComponent.vue';
import SettingsComponent from '@/components/app-tabs/SettingsComponent.vue';

const activeTab = ref("collections");

const changeTab = (newTab: string) => {
    activeTab.value = newTab;
};
</script>

<template>
    <app-navbar-component :active-tab="activeTab" @change-tab="changeTab" />

    <collection-component v-if="activeTab === 'collections'" />
    <learn-component v-if="activeTab === 'learn'" />
    <settings-component v-if="activeTab === 'settings'" />
</template>
