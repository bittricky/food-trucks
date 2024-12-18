"use client";

import { useState, FC } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import type { Icon } from "leaflet";

import { TruckMarkerProps } from "@/types/global";

// Only import Leaflet if we're on the client side
let L: any;
if (typeof window !== "undefined") {
  L = require("leaflet");
}

import { MapMarker, FoodTruck } from "@/types/global";

const createIcon = (color: string): Icon | null => {
  if (!L) return null;

  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
};

const icons = {
  default: createIcon("violet"),
  selected: createIcon("red"),
  user: createIcon("violet"),
};

const TruckMarker: FC<TruckMarkerProps> = ({ truck, isSelected, onSelect }) => {
  return (
    <Marker
      key={truck.objectid}
      position={[truck.latitude, truck.longitude]}
      icon={isSelected ? icons.selected : icons.default}
      eventHandlers={{
        click: () => onSelect(truck.objectid),
      }}
    >
      <Popup>
        <div className="p-2">
          <h3 className="font-bold">{truck.applicant}</h3>
          <p className="text-sm">{truck.address}</p>
          <p className="text-sm mt-1">{truck.fooditems}</p>
          {truck.dayshours && (
            <p className="text-sm mt-1">Hours: {truck.dayshours}</p>
          )}
        </div>
      </Popup>
    </Marker>
  );
};

const MapClickHandler: FC<{ onMapClick: () => void }> = ({ onMapClick }) => {
  useMapEvents({
    click: onMapClick,
  });
  return null;
};

const MapMarkers: FC<MapMarker> = ({ foodTrucks, currentLocation }) => {
  const [selectedTruck, setSelectedTruck] = useState<string | null>(null);

  const handleTruckSelect = (id: string) => {
    setSelectedTruck(id);
  };

  const handleMapClick = () => {
    setSelectedTruck(null);
  };

  return (
    <>
      <MapClickHandler onMapClick={handleMapClick} />
      <Marker
        position={[currentLocation.latitude, currentLocation.longitude]}
        icon={icons.user}
      >
        <Popup>
          <div className="p-2">
            <h3 className="font-bold">Your Location</h3>
            <p className="text-sm">
              {currentLocation.name || "Current location"}
            </p>
          </div>
        </Popup>
      </Marker>

      {foodTrucks.map((truck) => (
        <TruckMarker
          key={truck.objectid}
          truck={truck}
          isSelected={selectedTruck === truck.objectid}
          onSelect={handleTruckSelect}
        />
      ))}
    </>
  );
};

export default MapMarkers;
