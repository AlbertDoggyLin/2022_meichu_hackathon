<script setup lang="ts">
import { RouterView } from 'vue-router'
import navbar from './components/asset/navbar.vue'
import {provide, ref} from 'vue'
const isLogin = ref(true);
const userId = ref('');
const type = ref('');
provide('isLogin',  isLogin);
provide('userId',  userId);
provide('type',  type);
</script>

<template>
<div id="appW">
  <navbar />
  <RouterView />
</div>
</template>

<style scoped>
#appW{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
