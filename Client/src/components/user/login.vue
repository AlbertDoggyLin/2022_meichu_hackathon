<script setup>
import {ref, inject} from 'vue'
import router from '../../router';
const username=ref('')
const password=ref('')
const onclick=async()=>{
    const un=username.value
    const pw = password.value
    const res = await fetch('https://demo.le37.tw/api/login/seller', {
        body: JSON.stringify({username:un, password:pw}),
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, same-origin, *omit
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, cors, *same-origin
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // *client, no-referrer
    });
    if(res.status){
        const isLogin=inject('isLogin');
        const userId=inject('userId');
        const type=inject('type');
        if(isLogin)isLogin.value=true;
        userId.value=res.userId;

    }
}
</script>

<template>
    <div id="logw">
        <div>登入</div>
        <input v-model="username" type="text" placeholder="使用者帳號">
        <input v-model="password" type="password" placeholder="使用者密碼">
        <div id="btng">
            <button @click="$router.push('/')">註冊</button>
            <button @click="onclick">送出</button>
        </div>
    </div>
</template>    
<style scoped>
#logw{
    display: flex;
    height: 90%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
}
</style>