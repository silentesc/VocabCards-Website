<template>
    <nav>
        <router-link :to="{ name: 'HomeView' }">Home</router-link> |
        <router-link :to="{ name: 'AppView' }">App</router-link> |
        <router-link :to="{ name: 'LoginView' }">Login</router-link> |
        <router-link :to="{ name: 'RegisterView' }">Register</router-link> |
        <router-link :to="{ name: 'AccountView' }">Account</router-link>
    </nav>
    <router-view />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
