<script setup lang="ts">
import { RouterView } from 'vue-router'
import navbar from './components/asset/navbar.vue'
import {provide, ref} from 'vue'
const isLogin = ref(true);
const userId = ref('');
const type = ref('');
const place = ref('');
const car = ref({});
provide('isLogin',  isLogin);
provide('userId',  userId);
provide('type',  type);
provide('place',  place);
provide('car',  car);
</script>

<template>
<div id="appW">
  <navbar />
  <RouterView />
  <div id="fixedtext">

  </div>
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
