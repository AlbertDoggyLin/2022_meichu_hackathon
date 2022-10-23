<template>
    <div id="right">
        <div id="userName">{{ userName }}</div>
        <!--div id="placeName">{{ placeName }}</div-->
        <div class="ml"><i class="fa-solid fa-cart-shopping" @click="$router.push('/user/shopping')"></i></div>
        <div class="ml"><a href="/user/login"><i class="fa-solid fa-sign-out"></i></a></div>
    </div>
</template>

<script setup>
import {ref, inject} from 'vue'
import icon from './icon.vue'

const userName = inject('username')
</script>

<style>
#right {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    margin-right: 5%;
    color: #446882;
}

a, a:hover, a:focus {
    color: #446882 !important;
    background-color: white !important;
    text-decoration: none;
}

.ml {
    margin-left: 30%;
}
</style>