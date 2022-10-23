<template>
    <div id="shw">
        <div id="title">我的訂單</div>
        <table id="main">
            <tr id="head">
                <th>商品</th>
                <th>配送狀態</th>
                <th></th>
            </tr>
            <tr v-for="i in myList" :key="i">
                <td class="title">{{ i.name }}</td>
                <td class="price">{{ toChinese(i.status) }}</td>
                <td class="counter">訂單資訊</td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import {ref, inject, onMounted, reactive} from 'vue'

const myList = ref({})

onMounted(async () => {
    const res = await (await fetch('https://demo.le37.tw/api/buyer/orders', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': inject('userId').value,
        }
    })).json();
    myList.value = res
})

const toChinese = (status) => {
    if (status == 'ordered') {
        return '準備中';
    } else if (status == 'sending') {
        return '配送中';
    } else if (status == 'arrived') {
        return '已送達';
    } else if (status == 'received') {
        return '已接收'
    } else {
        return '錯誤';
    }
}
</script>

<style scoped>
#shw {
    width: 100%;
    padding: 0 5%;
}

#title {
    font-weight: 900;
    font-size: 40px;
    margin: 3% 0;
}

#main {
    border-collapse: collapse;
    width: 100%;
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 10%;
}

#head {
    color: #565656;
}

th, td {
    padding: 1%;
}
</style>