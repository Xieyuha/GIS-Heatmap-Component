<template>
    <div class="side-bar">
        <h2>热力图</h2>
        <div class="layer-panel"></div>
        <div class="tool-panel"></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .side-bar {
        background-color: #e3e7eb;
        width: 100%;
        height: 100%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
    }

    .layer-panel {
        position: relative;
        height: 30%;
        margin: 4% 6%;
        background-color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
    }

    .tool-panel {
        position: relative;
        top: 4%;
        height: 30%;
        margin: 4% 6%;
        background-color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
    }

    h2{
        text-align: left;
        padding: 12px;
        color: #333333;
    }
</style>