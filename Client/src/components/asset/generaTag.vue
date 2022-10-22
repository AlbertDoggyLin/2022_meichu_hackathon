<template>
  <div :style="'color:'+category_id">{{category_id}}</div>
</template>

<script setup>
const props = defineProps(['category_id'])
const chart=[
{"id":"1","name":"蔬菜","color":"#A4C3B2"},
{"id":"2","name":"水果","color":"#617BBE"},
{"id":"3","name":"肉類","color":"#FF7272"},
{"id":"4","name":"熟食","color":"#FFC794"}
]
console.log(props.category_id)
</script>

<style scoped>

</style>