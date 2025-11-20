<template>
    <div class="infobar">
        Infobar
        <!-- <button class="btn-showInfo" @click="showInfo = true"></button> -->
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .infobar{
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(6px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        box-shadow: 0 0px 4px rgba(0, 0, 0, 0.2);
    }
</style>