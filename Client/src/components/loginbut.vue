<template>
<button>Login</button>
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
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    line-height: 1;
    cursor: pointer;
    text-align: center;
}

button:hover,
button:focus {
    background: #0053ba;
}

button:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
}

button:active {
    transform: scale(0.99);
}
</style>