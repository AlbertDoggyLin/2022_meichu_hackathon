<template>
    <div id="shw">
        <div id="title">{{ username }}的購物車</div>
        <table id="main">
            <tr id="head">
                <th class="title">商品</th>
                <th class="price">單價</th>
                <th class="counter">數量</th>
                <th class="money">小記</th>
            </tr>
            <tr v-for="({title, price, number}, index) in carts" :key="index">
                <td class="title">{{ title }}</td>
                <td class="price">{{ price }}</td>
                <td class="counter">{{ number }}</td>
                <td class="money">{{ price * number }}</td>
            </tr>
        </table>
    </div>
    <div id="footer">
        <div id="sum">總計 {{ sum }}</div>
        <button id="btn" @click="submit()">
            <div><i class="fa-solid fa-credit-card"></i>&nbsp;&nbsp;確認結帳</div>
        </button>
    </div>
</template>

<script setup>
import {inject, ref} from 'vue';
import {useRouter} from 'vue-router';

const carts = inject('car')
const username = inject('username')
let s = 0
for (let idx in carts.value) {
    s += carts.value[idx].price * carts.value[idx].number
}
const sum = ref(s)
const userId = inject('userId')
const router = useRouter();
const submit = async () => {
    for (let idx in carts.value) {
        await (await fetch('https://demo.le37.tw/api/buyer/submitOrder', {
            body: JSON.stringify({item_id: idx/*Math.floor(Math.random*3)+1*/, number: carts.value[idx].number}),
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': userId.value,
            }
        })).json();
    }
    router.push('/user/order')

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
}

#head {
    color: #565656;
}

#footer {
    width: 95%;
    margin: 5%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

#sum {
    align-items: center;
    font-size: 1.3rem;
    font-weight: bold;
}

#btn {
    width: 9rem;
    height: 3rem;
    background-color: #198754;
    border-radius: 20px;
    border: none;
    color: white;
    margin: 0 3%;
    font-size: 1.1rem;
}

th, td {
    padding: 1%;
}
</style>
