<script setup lang="ts">
import { RouterView } from 'vue-router'
import navbar from './components/asset/navbar.vue'
import {provide, ref} from 'vue'
const isLogin = ref(false);
const userId = ref('2');
const username = ref('quan');
const type = ref('');
const place = ref('');
const car = ref({});
provide('isLogin',  isLogin);
provide('userId',  userId);
provide('username',  username);
provide('type',  type);
provide('place',  place);
provide('car',  car);
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
}
</style>
