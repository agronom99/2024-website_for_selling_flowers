import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CardMap.scss";
import L from "leaflet";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import FU from '../../components/images/FU.jpg'


const icon = L.icon({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  shadowUrl: iconShadow,
});

const CardMap = () => {
 

  return (
    <div className="map-poligon">
      <MapContainer
        center={[49.23554866721299, 28.459044754121013]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={icon} position={[49.23885642561507, 28.45899246958367]}>
          <Popup>
            Прекрасне спливаюче вікно CSS3. <br /> Легко настроюється.
          </Popup>
        </Marker>
      </MapContainer>
      <div className="polygon w-[287px] h-[299px] sm:w-[380px] sm:h-[508px] ">
        <div className=" flex justify-center mt-3">
          <img className=" w-16 h-16" src={FU} alt="FU" />
        </div>
        <div className=" flex justify-center mt-5">
          <img src="" alt="4" />
          <p className=" mx-2">Телефон:</p>
          <ul>
            <li>+38 (063) 829 30 30</li>
            <li>+38 (063) 829 30 30</li>
          </ul>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default CardMap;
