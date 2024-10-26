<script setup lang="ts">
import { ref } from 'vue';

const username = ref(null);
const password = ref(null);
const repeatPassword = ref(null);

const register = () => {
    if (password.value !== repeatPassword.value) {
        console.log("Passwords do not match.")
        return;
    }
    console.log("register with ", username.value, password.value);
};
</script>

<template>
    <h1>RegisterView</h1>

    <form @submit.prevent="register">
        <p>Username: <input type="text" required v-model="username"></p>
        <p>Password: <input type="password" v-model="password"></p>
        <p>Repeat Password: <input type="password" v-model="repeatPassword"></p>
        <button type="submit">Register</button>
    </form>
</template>
