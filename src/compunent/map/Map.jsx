import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { IoCloseSharp } from 'react-icons/io5';
import L from 'leaflet';
import { FaLocationArrow } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

// Location Marker Component
const LocationMarker = ({ triggerLocate }) => {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  React.useEffect(() => {
    if (triggerLocate) {
      map.locate();
    }
  }, [triggerLocate, map]);

  return position === null ? null : null;
};

// Draggable Map Component
const DraggableMarkerMap = ({ getpotion, hide }) => {
  const { t } = useTranslation();
  const [locate, setLocate] = useState(false);
  const initialPosition = [36.752887, 3.042048]; // Algiers coordinates
  const [markerPosition, setMarkerPosition] = useState(initialPosition);

  const customIcon = new L.icon({
    iconUrl: "https://i.ibb.co/vQ66KCL/png-clipart-johnston-red-ginger-location-port-of-south-louisiana-computer-icons-location-people-hear.png", // Replace with a valid image URL
    iconSize: [30, 30],
  });

  console.log(markerPosition);
  

  // Handle map events to track center position
  const MapEventHandler = () => {
    useMapEvents({
      moveend: (e) => {
        const map = e.target;
        const center = map.getCenter();
        setMarkerPosition([center.lat, center.lng]);
      },
    });
    return null;
  };

  const handleLocateClick = () => {
    setLocate((prev) => !prev); // Trigger location
  };

  return (
    <div className="fixed w-full bg-[#0007] h-screen flex justify-center items-center top-0 left-0">
      <div className="w-10/12 h-[65%] md:h-[85%] relative rounded-xl overflow-hidden">
        {/* Header Section */}
        <span onClick={hide} className="absolute right-2 top-1 cursor-pointer">
          <IoCloseSharp className="text-white" size={25} />
        </span>
        <div className="text-white flex flex-col items-center justify-center h-[15%] bg-[#dd2a5b] py-1.5">
          <h3 className="text-center font-bold md:text-xl">{t("find")}</h3>
          <p className="text-center px-5 text-xs md:text-lg my-1 font-[100]">
          {t("move")}
          </p>
        </div>
        {/* Map Section */}
        <div className="w-full h-[75%] relative overflow-hidden">
          <MapContainer
            center={initialPosition}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapEventHandler />
            <LocationMarker triggerLocate={locate} />
            <Marker position={markerPosition} icon={customIcon} />
          </MapContainer>
         
        </div>
        {/* Footer Section */}
        <div className="w-full bg-white h-[10%] flex items-center justify-center py-2">
          <button
            onClick={() => {
getpotion(markerPosition);
              hide();
            }}
            className="w-9/12 bg-[#dd2a5b] rounded-xl text-white text-lg font-semibold"
          >
            {t("location")}
          </button>
          <button
            onClick={handleLocateClick}
            className=" ml-1     px-3  rounded-lx w-2/12 "
          >
            <FaLocationArrow color='#dd2a5b' size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DraggableMarkerMap;
