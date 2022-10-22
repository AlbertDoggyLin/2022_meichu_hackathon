<template>
  <div id="wrapper">
    <div><icon src="logo.svg"/></div>
    <loginbut v-if="!isLogin" />
    <functionbar v-else />
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
#wrapper{
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
}
</style>