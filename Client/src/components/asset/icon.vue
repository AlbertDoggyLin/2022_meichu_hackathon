<template>
<div id="imw" ref="imgWrapper">
  <img :alt="props.src" :src="'/src/assets/'+props.src" :width="w" :height="h" />
</div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
const imgWrapper = ref(null)
const w = ref(10);
const h = ref(10)
const props = defineProps({src:String});
onMounted(()=>{
  if(imgWrapper.value){
    const el:HTMLElement=imgWrapper.value
    w.value=Number(el.clientWidth);
    h.value=Number(el.clientHeight);
  }
})
</script>

<style scoped>
#imw{
  width: 100%;
  height: 100%;
}
</style>