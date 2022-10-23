<script setup>
import {ref, inject, onMounted} from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const text = ref()
const textSize = ref()
const btn = ref()
const btnSize = ref()
onMounted(() => {
    textSize.value = Number(text.value.clientHeight) * 0.3 + 'px'
    btnSize.value = Number(btn.value.clientHeight) * 0.4 + 'px'
})

const router=useRouter();
const isLogin = inject('isLogin');
const userId = inject('userId');
const type = inject('type');

const password = ref('')
const onclick = async () => {
    const un = username.value
    const pw = password.value
    try {
        const res = await (await fetch('https://demo.le37.tw/api/login/buyer', {
            body: JSON.stringify({username: un, password: pw}),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            method: "POST", // *GET, POST, PUT, DELETE, etc.
        })).json();
        if (res.status != "login fail") {

            if (isLogin){ 
                isLogin.value = true;
                userId.value = res.id;
                type.value = res.type;
                router.push("/user/");
            }
        }
    } catch (e) {

    }
}
</script>

<template>
    <div id="logw">
        <div id="login">登入</div>
        <input v-model="username" ref="text" :style="'font-size:'+textSize" class="text-field" type="text"
               placeholder="使用者帳號">
        <input v-model="password" class="text-field" :style="'font-size:'+textSize" type="password" placeholder="使用者密碼">
        <div id="btng">
            <button @click="$router.push('/')" ref="btn" :style="'font-size:'+btnSize" id="sign-up-btn" class="btn"><i class="fa-solid fa-user-plus"></i>&nbsp;註冊
            </button>
            <button @click="onclick" :style="'font-size:'+btnSize" id="sign-in-btn" class="btn"><i class="fa-solid fa-right-from-bracket"></i>&nbsp;送出</button>
        </div>
    </div>
</template>
<style scoped>
#logw {
    display: flex;
    height: 60%;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    font-size: 24px;
}

#login {
    font-style: normal;
    font-weight: 900;
    font-size: 64px;
    line-height: 79px;
    text-align: center;
    color: #41b883;
}

#btng {
    width: 20%;
    display: flex;
    justify-content: space-between;
}

#sign-up-btn {
    background: rgba(203, 203, 203, 0.89);
}

#sign-in-btn {
    background: #198754;
}

.btn {
    padding: 5%;
    margin: 0 5%;
    width: 50%;
    gap: 10px;
    border: none;
    border-radius: 20px;
    color: white;
    font-weight: bold;
}

.text-field {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 1% 5%;
    gap: 10px;
    width: 60%;
    height: 20%;
    background: #FFFFFF;
    border: 1px solid #546A7B;
    border-radius: 20px;
    text-align: center;
}

</style>