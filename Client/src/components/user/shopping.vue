<template>
<div id="shw">
  <div id="title">{{username}}的購物車</div>
  <div id="main">
    <div id="head">
      <div class="title">商品</div>
      <div class="price">單價</div>
      <div class="counter">數量</div>
      <div class="money">小記</div>
    </div>
    <div v-for="({title, price, number}, index) in carts" :key="index">
      <div class="title">{{title}}</div>
      <div class="price">{{price}}</div>
      <div class="counter">{{number}}</div>
      <div class="money">{{price*number}}</div>
    </div>
  </div>
  <div id="footer">
    <div id="sum">總計 {{sum}}</div>
    <button id="gonext" @click="submit()">
      <div id="credicon">crediticon</div>
      <div>確認結帳</div>
    </button>
  </div>
</div>
</template>

<script setup>
import { inject, ref } from 'vue';

const carts=inject('car')
const username=inject('username')
let s=0
for(let idx in carts.value){
  s+=carts.value[idx].price*carts.value[idx].number
}
const sum=ref(s)
const submit=async ()=>{
  for(let idx in carts.value){
   await (await fetch('https://demo.le37.tw/api/buyer/submitOrder', {
      body: JSON.stringify({item_id: idx/*Math.floor(Math.random*3)+1*/, number: carts.value[idx].number}),
      method: "POST", 
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': inject('userId').value,
      }
    })).json();
  }
}
</script>

<style scoped>

</style>
