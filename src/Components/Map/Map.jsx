import { GeolocationControl, Map, Placemark, YMaps, ZoomControl } from "react-yandex-maps";
import '../Map/Map.scss';

export default function Maps (){
  return (
    <div className="maps_container">
      <YMaps>
        <Map 
          className="Maps"
          defaultState={{ center: [42.853409, 74.610169], zoom: 17}}>
          <Placemark 
          geometry={[42.853409, 74.610169]}
          />
          <ZoomControl/>
        </Map>
      </YMaps>
      <h3 className="address">Адрес: ул. Байтик Баатыра 25</h3>
    </div>
  )
}