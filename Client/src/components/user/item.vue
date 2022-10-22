<script setup>
import {ref, inject} from 'vue'
import { useRoute } from 'vue-router'
import generatag from '../asset/generaTag.vue'
const title=ref('')
const image=ref('')
const company_id=ref('')
const category_id=ref('')
const end_time=ref('')
const send_time=ref('')
const total=ref('')
const sold=ref('')
const description=ref('')
const route=useRoute()
fetch('https://demo.le37.tw/api/product/'+route.params.id, {
  headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': inject('userId').value,
  }
}).then(res=>res.json()).then(item=>{
  title.value=item.id;
  image.value=item.image;
  company_id.value=item.company_id;
  category_id.value=item.category_id;
  end_time.value=item.end_time;
  send_time.value=item.send_time;
  total.value=item.total;
  description.value=item.description;
  sold.value=item.sold;
})
</script>

<template>
<div id="itw">
    <div id="picw">
        <img :src="image" :alt="title">
    </div>
    <div id="infoArea">
        <div id="name">{{title}}</div>
        <div id="company">供應商 : {{company_id}}</div>
        <div id="tag"><generatag :category_id="category_id" /></div>
        <div id="description">{{description}}</div>
        <div v-if="browse">
            <div id="end">
                <div class="left">收單時間</div>
                <div class="right">{{end_time}}</div>
            </div>
            <div id="arrive">
                <div class="left">抵達時間</div>
                <div class="right">{{ send_time }}</div>
            </div>
            <div id="progress">
            <div class="left">剩餘數目</div>
            <div class="right">{{ total-sold }}</div>
            </div>
            <div id="purchase">
            <button id="money">
                <div id="moneypaper">moneyicon</div>
                <div>直接購買</div>
            </button>
            <button id="addCart" @click="">
                <div id="car">caricon</div>
                <div>加入購物車</div>
            </button>
            </div>
        </div>
        <div v-else>
            
        </div>
    </div>
</div>
</template>

<style scoped>
#itw{
    width: 420px;
    height: 265px;
    padding:30px;
    flex:row;
    justify-content: space-between;
    align-items: center;
}
</style>