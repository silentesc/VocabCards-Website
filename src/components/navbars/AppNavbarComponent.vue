<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

const props = defineProps(["activeTab"]);
const emit = defineEmits(["change-tab"]);

const changeTab = (newTab: string) => {
    emit("change-tab", newTab);
}
</script>

<template>
    <ul class="nav nav-pills justify-content-center">
        <li class="nav-item mx-1 my-2">
            <a :class="{ 'nav-link': true, 'active': props.activeTab === 'collections' }"
                @click="changeTab('collections')">Collections</a>
        </li>
        <li class="nav-item mx-1 my-2">
            <a :class="{ 'nav-link': true, 'active': props.activeTab === 'learn' }"
                @click="changeTab('learn')">Learn</a>
        </li>
        <li class="nav-item mx-1 my-2">
            <a :class="{ 'nav-link': true, 'active': props.activeTab === 'settings' }"
                @click="changeTab('settings')">Settings</a>
        </li>
    </ul>
</template>

<style scoped>
.nav-link {
    color: #fff;
    cursor: pointer;
}
</style>
