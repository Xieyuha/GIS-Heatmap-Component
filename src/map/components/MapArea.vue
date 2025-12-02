<template>
    <div class="map-area">
        <MapView class="map-view" />
        <MapToolbar class="map-toolbar" />
        <MapStatusCard class="map-status-card" />
    </div>
</template>

<script setup >
    import MapView from '@/map/components/MapView.vue';
    import MapToolbar from '@/map/components/MapToolbar.vue';
    import MapStatusCard from '@/map/components/MapStatusCard.vue';
</script>

<style scoped>
    .map-area {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
    }

    .map-view {
        position: absolute;
        inset: 0;
        background-color: #69a6c7;
        z-index: 1;
    }

    .map-toolbar {
        position: absolute;
        display: flex;
        flex-direction: row;
        bottom: 20px;
        left: 20px;
        width: 48px;
        height: 200px;
        z-index: 2;
    }

    .map-status-card {
        position: absolute;
        bottom: 20px;
        right: 20px;
        width: 200px;
        height: 36px;
        z-index: 2;
    }
</style>