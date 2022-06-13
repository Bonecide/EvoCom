import {Map, Placemark, YMaps, ZoomControl } from "react-yandex-maps";
import '../Map/Map.scss';

export default function Maps (){
  return (
    <div className="maps_container">
      <YMaps>
        <Map 
          className="Maps"
          defaultState={{ center: [42.879253, 74.614562], zoom: 16}}>
          <Placemark 
          geometry={[42.879253, 74.614562]}
          />
          <ZoomControl/>
        </Map>
      </YMaps>
    </div>
  )
}