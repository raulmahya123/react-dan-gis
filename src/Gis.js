import React ,{useRef,useEffect} from 'react'
import {loadModules} from "esri-loader"


function Gis() {
    const MapEl=useRef(null)

    useEffect(
       ()=>{
      let view;
    
      loadModules(["esri/views/MapView","esri/WebMap","esri/layers/GeoJSONLayer"],{
        css:true
      }).then(([MapView,WebMap,GeoJSONLayer])=>{
        const webmap= new WebMap({
          basemap:'topo-vector'
      })
        view= new MapView({
          map:webmap,
          center:[-83,42],
          zoom:8,
          container:MapEl.current
        })
    
        const geojsonLayer= new GeoJSONLayer({
          url:'https://raw.githubusercontent.com/adarshvarma15/mygeojson/main/RMS_Crime_Incidents%20edited.geojson'
        });
    webmap.add(geojsonLayer)
      })
    return()=>{
      if(!!view){
        view.destroy()
        view=null
      }
    }
    })
  return      <div style={{height:1000}} ref={MapEl}></div>
}



export default Gis