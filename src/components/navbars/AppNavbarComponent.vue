<template>
    <ul class="nav nav-pills justify-content-center">
        <li class="nav-item mx-1 my-2">
            <a class="nav-link">
                <router-link class="router-link-inactive" :to="{ name: 'CollectionsView' }">Collections</router-link>
            </a>
        </li>
        <li class="nav-item mx-1 my-2">
            <a class="nav-link">
                <router-link class="router-link-inactive" :to="{ name: 'LearnView' }">Learn</router-link>
            </a>
        </li>
        <li class="nav-item mx-1 my-2">
            <a class="nav-link">
                <router-link class="router-link-inactive" :to="{ name: 'SettingsView' }">Settings</router-link>
            </a>
        </li>
    </ul>
</template>

<style scoped>
.nav-link {
    font-size: 1.2em;
    color: #fff;
    cursor: pointer;
}

.nav-link:hover {
    color: gray;
}

.router-link-inactive {
    text-decoration: none;
    color: inherit;
}

.router-link-active {
    text-decoration: underline;
    color: #fff;
}
</style>
