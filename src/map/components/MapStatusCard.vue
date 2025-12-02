<template>
    <div class="map-status-card">
        <span> 坐标 {{ mapStore.center }}</span>
        <span> 缩放级别 {{ mapStore.zoom }}</span>
        <span> 其他信息 </span>
    </div>
</template>

<script setup >
    import { useMapStore } from '@/store/useMapStore';
    const mapStore = useMapStore();
</script>

<style scoped>
    .map-status-card {
        width: 100%;
        height: 100%;
        background-color: var(--bg-glass);
        border-width: var(--panel-border-width);
        border-style: var(--panel-border-style);
        border-color: var(--panel-border-color);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-soft);
    }
</style>