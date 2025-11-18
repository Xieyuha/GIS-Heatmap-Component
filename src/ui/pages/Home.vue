<template>
    <div class="Topbar">Topbar</div>
    <div class="Sidebar">
        <div class="LayerPanel"></div>
        <div class="ToolPanel"></div>
    </div>
    <div class="Main">
        
        <div class="MapContainer">
            <div class="Infobar">
                Infobar
                <!-- <button class="btn-showInfo" @click="showInfo = true"></button> -->
            </div>
            <div class="MapView">MapView</div>
            <div class="MapToolbar">MApToolbar</div>
            <div class="MapStatusCard">MapStatusCard</div>
        </div>
    </div>
    
    
</template>

<script setup lang="ts" name="Home">

</script>

<style scoped>
    .Topbar {
        position: fixed;
        top: 0;
        left: 0;
        height: 70px;
        width: 100%;
        background-color: #f5f5f5;
        border-bottom: 1px solid #ddd;
    }

    .Sidebar {
        position: fixed;
        top: 70px;
        left: 0;
        bottom: 0;
        width: 240px;
        padding:10px;
        background-color: rgb(154, 210, 191);
    }

    .LayerPanel{
        position: relative;
        height: 40%;
        background-color: #d1a3f9;
    }

    .ToolPanel{
        position: relative;
        height: 55%;
        margin-top: 5%;
        background-color: #f9e5a3;
    }
    .Main {
        display: flex;
        margin-left: 240px;
        margin-top: 70px;
        padding: 10px;
        background-color: #8c8c8c;
        /* 让元素全屏，但是去除70px */
        min-height: calc(100vh - 70px);
    }

    .MapContainer {
        position: relative;
        width: 100%;
        min-height: calc(100vh - 70px - 20px);
        /* 20px是Main的padding */
        background-color: #bfbfbf;
        overflow: hidden;
        z-index: 0;
    }

    .Infobar {
        position: absolute;
        top: 0;
        left: 0;
        width: 80%;
        height: 100px;
        background-color: #b33636;
        z-index: 2;
    }

    /* 高度由MapContainer控制 */
    .MapView {
        position: absolute;
        inset: 0;
        /* width: 100%;
        height: 100%; */
        background-color: #69a6c7;
        z-index: 1;
    }

    .MapToolbar{
        position: absolute;
        bottom: 20px;
        left: 20px;
        width: 200px;
        height: 50px;
        background-color: #c7a169;
        z-index: 2;
    }

    .MapStatusCard{
        position: absolute;
        bottom: 20px;
        right: 20px;
        width: 150px;
        height: 100px;
        background-color: #69c77e;
        z-index: 2;
    }
</style>