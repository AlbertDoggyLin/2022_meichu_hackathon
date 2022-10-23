<template>
    <div :style="'background-color:'+chart[category_id]['color']">{{ chart[category_id]['name'] }}</div>
</template>

<script setup>
import {defineProps, ref} from "vue";

const props = defineProps(['category_id'])
const chart = ref([
    {"id": "1", "name": "蔬菜", "color": "#A4C3B2"},
    {"id": "2", "name": "水果", "color": "#617BBE"},
    {"id": "3", "name": "肉類", "color": "#FF7272"},
    {"id": "4", "name": "熟食", "color": "#FFC794"}
])
</script>

<style scoped>
div {
    color: white;
    border-radius: 25%;
    width: 60%;
    margin: auto;
}
</style>