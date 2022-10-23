<template>
    <div id="wrapper">
        <a href="/">
            <div id="nav" style="width: 200px; height: 160px; padding-top: 55px;">
                <img style="width: 50px; height: 50px;" src="/logo.png"/>
                <div style="font-weight: bold; font-size: 2rem; margin-left: 20px">肚子鵝</div>
            </div>
        </a>
        <loginbut v-if="!isLogin"/>
        <functionbar v-else/>
    </div>
</template>

<script setup lang="ts">
import {inject} from 'vue'
import icon from './icon.vue'
import loginbut from './loginbut.vue'
import functionbar from './functionbar.vue'

const isLogin = inject('isLogin')
</script>

<style scoped>
#wrapper {
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
}

#nav {
    display: flex;
}

a, a:hover, a:focus {
    color: #446882;
    background-color: white;
    text-decoration: none;
}
</style>