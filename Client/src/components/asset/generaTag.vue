<template>
    <div :style="'background-color:'+chart[category_id]['color']">{{ chart[category_id]['name'] }}</div>
</template>

<script setup>
import {defineProps, ref} from "vue";

const props = defineProps(['category_id'])
const chart = ref([
    {"id": "1", "name": "水果", "color": "#617BBE"},
    {"id": "2", "name": "蔬菜", "color": "#A4C3B2"},
    {"id": "3", "name": "熟食", "color": "#FFC794"},
    {"id": "4", "name": "肉類", "color": "#FF7272"}
])
</script>

<style scoped>
div {
    color: white;
    border-radius: 25%;
    width: 80px;
    margin: auto;
    text-align: center;
}
</style>