<template>
    <div id="p4w" ref="pa">
        <img src="/public/fullpage/p4.png" alt="p4" ref="img">
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"

const pa=ref(null)
const img=ref(null)
onMounted(()=>{
    img.onload=()=>{
        const ratio=img.value.clientHeight/img.value.clientWidth;
        const w=pa.value.clientWidth;
        const h=pa.value.clientHeight;
        const picw=w<h/ratio?w:h/ratio;
        img.value.style.width=`${picw}px`;
        img.value.style.height = `${picw*ratio}px`;
    }
})
</script>

<style scoped>
#p4w{
    height: 100%;
    width: 100%;
}
img{
    width: 100%;
}
</style>