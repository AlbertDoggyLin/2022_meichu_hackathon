<script setup>
import generatag from './generaTag.vue'

import {ref, defineProps} from 'vue'

defineProps(['title', 'category_id', 'image', 'end_time', 'arrive_time', 'sold', 'total', 'id', 'cat_name', 'cat_color'])
const dealDate = (date) => {
    date = new Date(date);
    return `${(date.getMonth()+1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}
</script>

<template>
    <div>
        <button @click="$router.push('/user/item/'+id)" id="fcw" style="box-shadow: 0 0 10px 'cat_color';">
            <div id="picw">
                <img style="height: 150px; border-radius: 100%" :src="image" :alt="title">
            </div>
            <div id="in-btn">
                <div id="name">{{ title }}</div>
                <div id="tag">
                    <generatag :category_id="category_id"/>
                </div>
                <div id="infoArea">
                    <div id="end">
                        <div class="info"><i class="fa-solid fa-stopwatch icon"></i>&nbsp;&nbsp;{{ dealDate(end_time) }}</div>
                    </div>
                    <div id="arrive">
                        <div class="info"><i class="fa-solid fa-truck icon"></i>&nbsp;{{ dealDate(arrive_time) }}</div>
                    </div>
                    <div class="info"><i class="fa-solid fa-box icon"></i>&nbsp;&nbsp;&nbsp;{{ total - sold }}</div>
                </div>
            </div>
        </button>
    </div>
</template>

<style scoped>
#fcw {
    width: 350px;
    height: 260px;
    padding: 10px;
    margin: 30px;
    background-color: white;
    border-radius: 20%;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    border: 1px solid lightgray;
    box-shadow: 0 0 10px red;
}

#in-btn {
    display: flex;
    flex-direction: column;
}

#name {
    font-size: 24px;
    font-weight: 900;
}

#infoArea {
    text-align: left;
    font-size: 18px;
    display: flex;
    flex-direction: column;
}

.info {
    margin: 5% 0;
}

.icon {
    color: #446882;
}
</style>