import { coordinateRelationship } from "ol/extent";
import { defineStore } from "pinia";
export const useMapStore = defineStore("map", {
    state:()=>({
        //底图
        basemap:'osm',
        //热力图参数
        heatEnabled:true,
        blur:10,
        radius:10,
        //热力权重
        weightField:'value',
        weightFactor:1,
        //视图状态
        zoom:4,
        center:[119,39],
        
        
    }),
    actions:{}
}
)
