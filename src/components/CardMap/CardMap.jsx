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
import FU from "../../components/images/FU.jpg";
import Contact from "../../components/images/contacts.png";
import Skype from "../../components/images/skype.png";
import SkypeW from "../../components/images/skype-w.png";

import Poshta from "../../components/images/poshta.png";
import Insta from "../../components/images/insta.svg";
import Facebook from "../../components/images/facebook.svg";
import BlumVL from "../../components/images/blum-v-l.svg";
import BlumVR from "../../components/images/blum-v-r.svg";



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
        <Marker icon={icon} position={[49.2398, 28.4591]}>
          <Popup>
            Прекрасне спливаюче вікно CSS3. <br /> Легко настроюється.
          </Popup>
        </Marker>
      </MapContainer>
      <div className="polygon w-[287px] h-[299px] sm:w-[380px] sm:h-[508px] ">
        <div className=" flex justify-center mt-3 sm:6">
          <img className=" w-16 h-16 sm:w-28 sm:h-28" src={FU} alt="FU" />
        </div>
        <div className=" flex justify-center sm:flex-col sm:items-center mt-5 sm:mt-10 text-xs sm:text-base">
          <div className=" flex">
            <img className=" w-3.5 h-3.5 mt-1" src={Contact} alt="4" />
            <p className=" mx-3">Телефон:</p>
          </div>
          <ul>
            <li>+38 (063) 829 30 30</li>
            <li>+38 (063) 829 30 30</li>
          </ul>
        </div>
        <div className=" flex sm:flex-col justify-center sm:items-center mt-5 sm:mt-10 text-xs sm:text-base">
          <div className=" flex">
            <img className=" w-5 h-4.5" src={Skype} alt="4" />
            <p className=" mx-2 mr-10 ">Skype:</p>
          </div>
          <ul>
            <li>Flowers-Ukraine</li>
          </ul>
        </div>
        <div className=" flex flex-row sm:flex-col justify-center sm:items-center mt-5 sm:mt-10 text-xs sm:text-base">
          <div className=" flex">
            <img className=" w-6 h-4.5" src={Poshta} alt="4" />
            <p className=" mx-2 mr-3 ">Почта:</p>
          </div>
          <ul>
            <li>flowers.ukraine@gmail.com</li>
          </ul>
        </div>
        <div className=" flex justify-center mt-5 sm:mt-10">
          <img className=" w-8 h-8" src={Insta} alt="4" />
          <div className=" bg-[#956D84] rounded-full w-8 h-8 mx-5 flex items-center justify-center">
            <img className="" src={SkypeW} alt="4" />
          </div>
          <img className=" w-8 h-8" src={Facebook} alt="4" />
        </div>
      </div>
      <div className=" hidden sm:flex sm:absolute top-[260px]">
        <img className="mr-[1400px]" src={BlumVL} alt="BlumVL" />
        <img src={BlumVR} alt="BlumVR" />

      </div>
    </div>
  );
};

export default CardMap;
