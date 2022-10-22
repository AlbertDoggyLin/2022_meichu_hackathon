<template>
    <div>
        <icon src='logo.svg'/>
        <div id="userName">{{ userName }}</div>
        <div id="placeName">{{ placeName }}</div>
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-solid fa-sign-out"></i>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import icon from './icon.vue'

const userName = ref('Name')
</script>

<style>

</style>