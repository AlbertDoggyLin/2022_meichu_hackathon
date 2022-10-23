<template>
<div id="mpw" ref="site">
<div :style="`height:${he}px;transition-duration: 0.5s;transform:translateY(${-replacement}px)`">
    <div ref="r1"><p1 /></div>
    <div ref="r2"><p2 /></div>
    <div ref="r3"><p3 /></div>
    <div ref="r4"><p4 /></div>
    <div ref="r5"><p5 /></div>
    <div ref="r6"><p6 /></div>
    <div ref="r7"><p7 /></div>
</div>
</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import p1 from './fullPageComponent/p1.vue'
import p2 from './fullPageComponent/p2.vue'
import p3 from './fullPageComponent/p3.vue'
import p4 from './fullPageComponent/p4.vue'
import p5 from './fullPageComponent/p5.vue'
import p6 from './fullPageComponent/p6.vue'
import p7 from './fullPageComponent/p7.vue'
const site=ref(null)
const replacement=ref(0)
const n=7
const he=ref(0)
const buffer=ref(false)
const curp=ref(0)
const r1=ref(null)
const r2=ref(null)
const r3=ref(null)
const r4=ref(null)
const r5=ref(null)
const r6=ref(null)
const r7=ref(null)
onMounted(()=>{
    const h = site.value.clientHeight
    he.value=7*h;
    console.log(he.value)
    r1.value.style.height = r2.value.style.height = r3.value.style.height
     = r4.value.style.height = r5.value.style.height = r6.value.style.height = r7.value.style.height = `${h}px`;
    site.value.onscroll = null
    site.value.addEventListener('mousewheel', (e)=>{
        if(buffer.value)return;
        if(e.deltaY>0){
            if(curp.value!=6)curp.value+=1

        }else if(e.deltaY<0){
            if(curp.value!=0)curp.value-=1
        }
        else return
        buffer.value=true
        if(curp.value<0)curp.value=0;
        if(curp.value>6)curp.value=6;
        replacement.value=h*curp.value
        setTimeout(()=>{buffer.value=false}, 500)
    })
})
</script>

<style scoped>
#mpw{
    height: 100%;
    width: 100%;
    overflow: hidden;
}

</style>