<script setup lang="ts">
import { ref } from 'vue';

const username = ref(null);
const password = ref(null);

const login = () => {
    console.log("login with ", username.value, password.value);
};
</script>

<template>
    <h1>LoginView</h1>

    <form @submit.prevent="login">
        <p>Username: <input type="text" required v-model="username"></p>
        <p>Password: <input type="password" v-model="password"></p>
        <button type="submit">Login</button>
    </form>
</template>
