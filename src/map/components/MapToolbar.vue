<template>
    <div class="map-toolbar">
        缩放 
        移动 
        绘制 
    </div>
</template>

<script setup>

</script>

<style scoped>
    .map-toolbar {
        width: 100%;
        height: 100%;
        
        
        
        /* backdrop-filter: blur(6px); */
        background-color: rgba(255, 255, 255, 0.25);
        /* background: var(--panel-soft); */
        border-width: var(--panel-border-width);
        border-style: var(--panel-border-style);
        border-color: var(--panel-border-color);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-soft);
    }
</style>