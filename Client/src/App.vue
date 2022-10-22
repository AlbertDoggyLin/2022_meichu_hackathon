<script setup lang="ts">
import { RouterView } from 'vue-router'
import navbar from './components/navbar.vue'
import {provide, ref} from 'vue'
const isLogin = ref(true);
provide('isLogin',  isLogin);
</script>

<template>
  <navbar />
  <RouterView />
</template>

<style scoped>
</style>
