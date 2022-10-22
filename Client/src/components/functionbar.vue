<template>
<div>
  <div id="userName">{{userName}}</div>
  <icon src='logo.svg'/>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import icon from './icon.vue'
const userName=ref('Name')
</script>

<style>

</style>