<template>
    <div class="side-bar">
        <h2>热力图</h2>
        <div class="layer-panel">
            <span>影像底图</span><br>
            <span>矢量底图</span>
        </div>
        <div class="tool-panel">
            <span >半径大小:{{ mapStore.radius }}</span><br>
            <input type="range" v-model.number="mapStore.radius"><br>
            <span >模糊大小:{{ mapStore.blur }}</span><br>
            <input type="range" v-model.number="mapStore.blur"><br>
        </div>
    </div>
</template>

<script setup >
import { useMapStore } from '@/store/useMapStore';
import { watch } from 'vue';
const mapStore = useMapStore(); 
watch(()=>mapStore.blur,(val)=>{
    console.log(val);
    
})
</script>

<style scoped>
    .side-bar {
        background-color: rgba(10, 26, 47, 0.8);
        width: 100%;
        height: 100%;        
        border-width: var(--panel-border-width);
        border-style: var(--panel-border-style);
        border-color: var(--panel-border-color);
        border-radius: 16px 0 0 8px;
        box-shadow: var(--shadow-soft);
       
    }

    .layer-panel {
        position: relative;
        height: 30%;
        margin: 4% 6%;
        background-color: var(--panel-soft);
        border-width: var(--panel-border-width);
        border-style: var(--panel-border-style);
        border-color: var(--panel-border-color);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-soft);
    }

    .tool-panel {
        position: relative;
        top: 4%;
        height: 30%;
        margin: 4% 6%;
        background-color: var(--panel-soft);
        border-width: var(--panel-border-width);
        border-style: var(--panel-border-style);
        border-color: var(--panel-border-color);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-soft);
    }

    h2{
        text-align: left;
        padding: 12px;
        color: white;
    }
</style>