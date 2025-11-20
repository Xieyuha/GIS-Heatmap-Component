<template>
    <div id="map">

    </div>
</template>

<script setup lang="ts" name="MapView">
    import { onMounted } from 'vue';
    import GeoJSON from 'ol/format/GeoJSON';
    import Map from 'ol/Map';
    import View from 'ol/View';
    import VectorLayer from 'ol/layer/Vector';
    import VectorSource from 'ol/source/Vector';
    import TileLayer from 'ol/layer/Tile';
    import OSM from 'ol/source/OSM';
    // 非常规交互式链接
    import Link from 'ol/interaction/Link';
    import DragAndDrop from 'ol/interaction/DragAndDrop';

    onMounted(() => {
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM()
                }),
                new VectorLayer({
                    source: new VectorSource({
                        format: new GeoJSON(),
                        url:'../.././public/data/countries_demo.geojson'
                    })
                })
            ],
            view: new View({
                center: [0,0],
                zoom:4
            })
        })

        map.addInteraction(new Link());
        map.addInteraction(new DragAndDrop({
            formatConstructors: [GeoJSON]
        }));
    })
</script>

<style scoped>
    #map {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>