import React, { useState } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { IoCloseSharp } from 'react-icons/io5';
import L from 'leaflet'; // Import Leaflet for custom icon

const DraggableMarkerMap = ({getpotion, hide}) => {
  const initialPosition = [36.752887, 3.042048]; // Coordinates for Algiers
  const [markerPosition, setMarkerPosition] = useState(initialPosition);
console.log(markerPosition);
const customIcon = new L.icon({
    iconUrl: "https://e7.pngegg.com/pngimages/734/288/png-clipart-johnston-red-ginger-location-port-of-south-louisiana-computer-icons-location-people-heart-thumbnail.png",
    iconSize: 30
})
  // Custom component to track map events
  const MapEventHandler = () => {
    useMapEvents({
      moveend: (e) => {
        const map = e.target;
        const center = map.getCenter();
        setMarkerPosition([center.lat, center.lng]);
      },
    });
    return null; // No rendering needed
  };

  return (
    <div className="fixed w-full bg-[#0007] h-screen flex justify-center items-center top-0 left-0">
      <div className="w-11/12 h-[75%] md:h-[85%] relative rounded-xl overflow-hidden">
        {/* Header Section */}
        <span
        onClick={hide}
        className='absolute right-2 top-1'
        >
        <IoCloseSharp
        className='text-white'
        size={25}
        />
        </span>
        <div className="text-white flex flex-col items-center justify-center h-[15%] bg-[#dd2a5b] py-1.5">
        
          <h3 className="text-center font-bold md:text-xl">Fine-tune your location</h3>
          <p className="text-center px-5 text-xs md:text-lg my-1 font-[100]">
            Please move the map to set the exact delivery location
          </p>
        </div>
        {/* Map Section */}
        <div className="w-full h-[75%]  overflow-hidden">
         
          <MapContainer
            center={initialPosition}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {/* Event Handler */}
            <MapEventHandler />
            {/* Hidden Marker for Position */}
            <Marker
            icon={customIcon}
            position={markerPosition} />
          </MapContainer>
        </div>
        {/* Footer Section */}
        <div className="w-full bg-white h-[10%] flex items-center justify-center py-2">
        
          <button
          onClick={()=> {
            getpotion(markerPosition)
            hide()
          }}
          className="w-11/12 md:w-9/12 h-fit bg-[#dd2a5b] rounded-3xl text-white  text-lg font-semibold">
            Confirm pin location
          </button>
        </div>
      </div>
    </div>
  );
};

export default DraggableMarkerMap;
