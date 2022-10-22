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
import { inject } from 'vue';

const carts=inject('carts')
const username=inject('username')
let s=0
for(item in carts){
  s+=item.price*item.number
}
const sum=ref(s)
const submit=()=>{

}
</script>

<style scoped>

</style>