<script setup>
import {ref, inject} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import generatag from '../asset/generaTag.vue'

const title = ref('')
const id = ref('')
const image = ref('')
const company_id = ref('')
const category_id = ref('')
const end_time = ref('')
const arrive_time = ref('')
const total = ref('')
const price = ref('')
const sold = ref('')
const descript = ref('')
const route = useRoute()
fetch('https://demo.le37.tw/api/product/' + route.params.id, {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': inject('userId').value,
    }
}).then(res => res.json()).then(item => {
    console.log(item)
    title.value = item.name;
    id.value = item.id;
    image.value = item.image;
    company_id.value = item.company_id;
    category_id.value = item.category_id;
    end_time.value = item.end_time;
    arrive_time.value = item.arrive_time;
    total.value = item.total;
    price.value = item.price;
    descript.value = item.descript;
    sold.value = item.sold;
})
const browse = ref(true)
const number = ref(0)
let choice = ''
const car = inject('car')
const router = useRouter()
const send = () => {
    if (id.value in car.value) car.value[id.value].number += number.value
    else {
        car.value[id.value] = {
            number: number.value,
            price: price.value,
            title: title.value
        }
    }
    if (choice != 'cart') router.push('/user/shopping')
}
const jmp = (btn) => {
    browse.value = false
    choice = btn
}
const dealDate = (date) => {
    date = new Date(date);
    return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}
</script>

<template>
    <div id="itw">
        <div id="picw">
            <img style="height: 380px; border-radius: 5%;" :src="image" :alt="title">
        </div>
        <div id="infoArea">
            <div id="name">{{ title }}</div>
            <div id="tag">
                <generatag :category_id="category_id"/>
            </div>
            <p id="description">{{ descript }}</p>
            <div v-if="browse">
                <table style="width: 60%; margin-left: 20%;">
                    <tr>
                        <td>收單時間</td>
                        <td>{{ dealDate(end_time) }}</td>
                    </tr>
                    <tr>
                        <td>抵達時間</td>
                        <td>{{ dealDate(arrive_time) }}</td>
                    </tr>
                    <tr>
                        <td>剩餘數目</td>
                        <td>{{ total - sold }}</td>
                    </tr>
                </table>
                <div id="purchase">
                    <button id="purchase-btn" class="btn" @click="jmp('purchase')">
                        <div><i class="fa-solid fa-file-invoice-dollar"></i>&nbsp;直接購買</div>
                    </button>
                    <button id="shopping-btn" class="btn" @click="jmp('cart')">
                        <div><i class="fa-solid fa-cart-shopping"></i>&nbsp;加入購物車</div>
                    </button>
                </div>
            </div>
            <div v-else>
                <div id="number">
                    <div>購買數量</div>
                    <button @click="number-=1">-</button>
                    <div>{{ number }}</div>
                    <button @click="number+=1">+</button>
                </div>
                <input type="text" placeholder="備註">
                <div id="purchase">
                    <button id="cancel" @click="browse=true">
                        <div>取消</div>
                    </button>
                    <button id="submit" @click="send()">
                        <div id="submiticon">submiticon</div>
                        <div>送出</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#itw {
    width: 100%;
    height: 265px;
    padding: 30px;
    display: flex;
    justify-content: center;
    text-align: center;
}

#name {
    font-size: 36px;
    font-weight: 900;
}
#description {
    margin: 5%;
}

#infoArea {
    width: 40%;
    padding: 2%;
}

#purchase-btn {
    color: #4E4E4E;
    background: white;
    border: 1px solid #4E4E4E;
    margin: 2%;
}

#shopping-btn {
    background: #198754;
    margin: 3%;
}

#purchase {
    margin-top: 5%;
}

.btn {
    padding: 3%;
    width: 35%;
    gap: 10px;
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: bold;
}
</style>
