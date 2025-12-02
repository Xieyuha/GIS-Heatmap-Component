<template>
    <div class="background">
    <Topbar class="home-topbar"/>
    <Sidebar class="home-sidebar"/>
    <main class="home-main">
        
        <div class="home-mapcontainer">
            <div class="home-infobar">
                <Infobar/>
            </div>
            <div class="home-map-area">
                <MapArea/>
            </div>
        </div>
    </main>
    
    </div>
</template>

<script setup lang="ts" name="Home">
    import Infobar from '@/ui/components/Infobar.vue';
    import Sidebar from '@/ui/components/Sidebar.vue';
    import Topbar from '@/ui/components/Topbar.vue';
    import MapArea from '@/map/components/MapArea.vue';

</script>

<style scoped>
    .home-topbar {
        position: fixed;
        top: 0;
        left: 245px;
        height: 54px;
        width: 100%;
        /* border-bottom: 1px solid #ddd; */
    }

    .home-sidebar {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 245px;
    }

    .home-main {
        display: flex;
        flex-direction: column;
        margin-left: 245px;
        margin-top: 54px;
        height: calc(100vh - 54px);
        background-color: #8c8c8c;
        /* 让元素全屏，但是去除70px */
        /* min-height: calc(100vh - 70px); */
    }

    .home-mapcontainer {
        position: relative;
        flex: 1;
        /* min-height: calc(100vh - 70px - 20px); */
        /* 20px是Main的padding */
        background-color: #bfbfbf;
        overflow: hidden;
        z-index: 0;
    }

    .home-map-area {
        position: absolute;
        flex: 1;
        inset: 0;
        z-index: 1;
    }

    .home-infobar {
        position: absolute;
        top: 20px;
        left: 40px;
        width: 800px;
        height: 60px;
        z-index: 2;
    }


</style>