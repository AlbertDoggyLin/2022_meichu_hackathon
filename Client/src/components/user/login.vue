<template>
<div>
    <div>登入</div>
    <input v-model="username" type="text" placeholder="使用者帳號">
    <input v-model="password" type="password" placeholder="使用者密碼">
    <button @click="onclick">登入</button>
    <router-link to="/createAccount">還沒有帳號嗎?建立新的帳號</router-link>
</div>
</template>

<script setup>
import {ref, inject} from 'vue'
const username=ref('')
const password=ref('')
const onclick=async()=>{
    const un=username.value
    const pw = password.value
    const res = await fetch('https://api.le37.tw/', {
        body: JSON.stringify({un, pw}),
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
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

<style scoped>

</style>