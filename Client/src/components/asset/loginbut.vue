<template>
<button @click="$router.push('/user/login')">Login</button>
</template>

<script setup lang="ts">
</script>

<style scoped>
button {
    display: inline-block;
    border: none;
    margin: 0;
    text-decoration: none;
    background: transparent;
    color: #446882;
    font-weight: 900;
    font-family: sans-serif;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
}

button:hover,
button:focus {
    color: #1E4460;
    text-decoration: none;
}

button:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
    text-decoration: none;
}

button:active {
    transform: scale(0.99);
    text-decoration: none;
}
</style>