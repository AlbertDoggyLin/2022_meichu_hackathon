<template>
  <div style="position:fixed;height:100vh;width:100vw;">
    <div class="title">
        我的訂單
    </div>
    <div class="tableHeader">
      <div class="row">
        <div class="col">商品</div>
        <div class="col">配送狀態</div>
        <div class="col"></div>
      </div>
      <div v-for="i in myList" :key="i" class="row">
        <div class="col">{{i.name}}</div>
        <div class="col">{{i.status}}</div>
        <div class="col">訂單資訊</div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script setup>
import {ref, inject, onMounted, reactive} from 'vue'

const myList = ref({})

onMounted(async () => {
    const res = await (await fetch('https://demo.le37.tw/api/buyer/orders', {
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': inject('userId').value,
    }
    })).json();
    myList.value = res
})


</script>

<style scoped>
.title{
  position: absolute;
  left: 10%;
  top:  23%;
  /*font-family: '?????';*/
  font-style: normal;
  font-weight: 400;
  font-size: min(5vh,10vw);
  line-height: 64px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;

}
.tableHeader{
  box-sizing: border-box;

  position: absolute;
  padding-top:10px;
  width:80%;
  height: 58px;
  left: 5%;
  top: 35%;

  border-top: 3px solid #4f4f4f;
}

.table{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;

  position: absolute;
  width: 90%;
  height: 354px;
  top: 298px;
}

.row{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.col{
  width: 33%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: min(3vh,3vw);
  line-height: 29px;
  /* identical to box height */

  text-align: center;

  color: #cfcfcf;
}
.footer{
  box-sizing: border-box;

  position: absolute;
  width:80%;
  height: 58px;
  left: 5%;
  bottom: 5%;

  border-top: 3px solid #4f4f4f;
}
</style>