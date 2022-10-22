<script setup>
import { onMounted, ref, inject } from "vue"
import foodCard from '../asset/foodcard.vue'

const items=ref([])
onMounted(async ()=>{
  items.value = await (await fetch('https://demo.le37.tw/api/buyer/products', {
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': inject('userId').value,
    }
  })).json()
  if(!items.value){
    items.value=[{"id":1,"category_id":1,"company_id":1,"name":"翠玉白菜","price":1000,"image":null,"discript":"英國進口，故宮博物館最後3個！","sold":0,"total":3,"show":1,"create_time":"2022-10-22T00:00:00.000Z","end_time":"2022-10-22T12:00:00.000Z","send_time":"2022-10-22T14:00:00.000Z"},{"id":2,"category_id":3,"company_id":1,"name":"香香肥豬肉","price":120,"image":null,"discript":"99.99% 肥肉組成，保證吃不出瘦肉的感覺","sold":0,"total":10,"show":1,"create_time":"2022-10-22T08:00:00.000Z","end_time":"2022-10-22T12:00:00.000Z","send_time":"2022-10-22T13:00:00.000Z"},{"id":3,"category_id":2,"company_id":1,"name":"iphone","price":50,"image":null,"discript":"新鮮の捧構","sold":0,"total":24,"show":1,"create_time":"2022-10-22T06:00:00.000Z","end_time":"2022-10-22T08:00:00.000Z","send_time":"2022-10-22T09:00:00.000Z"}]
  }
  console.log(items.value)
})
</script>

<template>
    <div id="outdw">
      <div id="indw">
        <div v-for="(item, index) in items" :key="items.name">
            <foodCard v-bind="item" :title="item.name"/>
        </div>
      </div>
    </div>
</template>

<style scoped>
#outdw {
    display: flex;
    justify-content: center;
}

#indw{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
}
</style>