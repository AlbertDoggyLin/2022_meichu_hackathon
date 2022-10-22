<script setup>
import {ref, inject} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import generatag from '../asset/generaTag.vue'
const title=ref('')
const id=ref('')
const image=ref('')
const company_id=ref('')
const category_id=ref('')
const end_time=ref('')
const send_time=ref('')
const total=ref('')
const price=ref('')
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
  title.value=item.name;
  id.value=item.id;
  image.value=item.image;
  company_id.value=item.company_id;
  category_id.value=item.category_id;
  end_time.value=item.end_time;
  send_time.value=item.send_time;
  total.value=item.total;
  total.price=item.price;
  description.value=item.description;
  sold.value=item.sold;
})
const browse=ref(true)
let choice=''
const send=()=>{
    const car=inject('car')
    if(id.value in car.value)car.value[id.value].nember+=number.value
    else {
        car.value[id.value]={
            number:number.value,
            price:price.value,
            title:title.value
        }
    }
    if(choice!='cart')useRouter().push('/user/shopping')
}
const jmp=(btn)=>{
    browse.value=false
    choice=btn
}
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
            <button id="money" @click="jmp('purchase')">
                <div id="moneypaper">moneyicon</div>
                <div>直接購買</div>
            </button>
            <button id="addCart" @click="jmp('cart')">
                <div id="car">caricon</div>
                <div>加入購物車</div>
            </button>
            </div>
        </div>
        <div v-else>
            <div id="number">
                <div>購買數量</div>
                <button @click="number-=1">-</button>
                <div>{{number}}</div>
                <button @click="number+=1">+</button>
            </div>
            <input type="text" placeholder="備註">
            <div id="purchase">
                <button id="cancel" @click="browse=true">
                    <div>取消</div>
                </button>
                <button id="submit" @click="send()">
                    <div id="car">caricon</div>
                    <div>加入購物車</div>
                </button>
            </div>
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