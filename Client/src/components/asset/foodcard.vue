<script setup>
import {defineProps} from 'vue'
defineProps(['title', 'category_id', 'image', 'end_time', 'arrive_time', 'sold', 'total'])
</script>

<template>
<div id="fcw">
    <div id="picw">
        <img :src="image" :alt="title">
    </div>
    <div id="infoArea">
        <div id="name">{{title}}</div>
        <div id="tag"><generatag :category="category_id" /></div>
        <div id="end">
            <div id="clock">clock icon</div>
            <div id="endtime">{{end_time}}</div>
        </div>
        <div id="arrive">
            <div id="truck">truck icon</div>
            <div id="arrivetime">{{arrive_time}}</div>
        </div>
        <div id="progress">{{sold*100/total}}%</div>
    </div>
</div>
</template>

<style scoped>
#fcw{
    width: 391px;
    height: 235px;
    flex:row;
    justify-content: space-between;
    align-items: center;
}
</style>