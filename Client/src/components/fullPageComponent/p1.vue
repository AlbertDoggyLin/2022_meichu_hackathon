<template>
    <div id="p1w" ref="pa">
        <div>
        <img src="/public/fullpage/p1.png" alt="p1" :onload="loaded()" ref="img">
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"

const pa=ref(null)
const img=ref(null)
const mounted=ref(false)
const imgloaded=ref(false)
const loaded=()=>{
    imgloaded.value=true
    if(mounted.value&&imgloaded.value){
        setTimeout(() => {
            const ratio=img.value.clientHeight/img.value.clientWidth;
            const w=pa.value.clientWidth;
            const h=pa.value.clientHeight;
            let picw=w<h/ratio?w:h/ratio;
            if(picw==0)picw='50px';
            console.log(w, h)
            img.value.style.width=`${picw}px`;
            img.value.style.height = `${picw*ratio}px`;
        }, 100);
    }
}
onMounted(()=>{
    mounted.value=true
    if(mounted.value&&imgloaded.value){
        setTimeout(() => {
            const ratio=img.value.clientHeight/img.value.clientWidth;
            const w=pa.value.clientWidth;
            const h=pa.value.clientHeight;
            let picw=w<h/ratio?w:h/ratio;
            if(picw==0)picw='50px';
            console.log(w, h)
            img.value.style.width=`${picw}px`;
            img.value.style.height = `${picw*ratio}px`;
        }, 100);
    }
})
</script>

<style scoped>
#p1w{
    height: 100%;
    width: 100%;
}
img{
    width: 100%;
}
</style>