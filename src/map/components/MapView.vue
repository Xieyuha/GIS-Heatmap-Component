<template>
    <div id="map">

    </div>
</template>

<script setup name="MapView">
    // OpenLayers核心模块
    import GeoJSON from 'ol/format/GeoJSON';
    import Map from 'ol/Map';
    import View from 'ol/View';
    import VectorLayer from 'ol/layer/Vector';
    import VectorSource from 'ol/source/Vector';
    import TileLayer from 'ol/layer/Tile';
    import OSM from 'ol/source/OSM';
    import HeatmapLayer from 'ol/layer/Heatmap';
    // 非常规交互式链接
    import Link from 'ol/interaction/Link';
    import DragAndDrop from 'ol/interaction/DragAndDrop';
    // 框架状态管理
    import { useMapStore } from '@/store/useMapStore';
    import { onMounted, watch } from 'vue';
    import { fromLonLat } from 'ol/proj';
    // 坐标转换
    import gcoord from 'gcoord';
    const mapStore = useMapStore();
    let heatSource = null
    let heatLayer = null
    onMounted(() => {
        heatSource = new VectorSource({
            format: new GeoJSON(),
            url: '/data/heatmap_points.geojson'
        })
        heatLayer = new HeatmapLayer({
            source: heatSource,
            blur: mapStore.blur,
            radius: mapStore.radius,
            weight: () => 1,
        })
        const map = new Map({
            target: 'map',
            layers: [

                new TileLayer({
                    source: new OSM()
                }),
                new VectorLayer({
                    source: new VectorSource({
                        format: new GeoJSON(),
                        url: '/data/country.geojson'
                    })
                }),
                heatLayer,
            ],
            view: new View({
                projection: 'EPSG:3857',
                center: fromLonLat(mapStore.center),//经纬度转为墨卡托坐标
                zoom: mapStore.zoom
            })
        })
        map.addInteraction(new Link());
        map.addInteraction(new DragAndDrop({
            formatConstructors: [GeoJSON]
        }));
        watch(() => mapStore.blur, () => heatLayer.setBlur(mapStore.blur))
        watch(() => mapStore.radius, () => heatLayer.setRadius(mapStore.radius))
    })
</script>

<style scoped>
    #map {
        width: 100%;
        height: 100;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>