<template>
  <div id="indw">
    <div v-for="item in items">
        <foodCard v-bind="item" :title="item.name"/>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, inject } from "vue"

const items=ref([])
onMounted(async ()=>{
  items.value = fetch('https://demo.le37.tw/api/buyer/products', {
    header:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'barear '+inject('userId').value,
    }
  })
})
</script>

<style scoped>

</style>