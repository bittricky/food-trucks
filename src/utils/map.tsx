"use client";

import { Marker, Popup } from "react-leaflet";
import type { Icon } from "leaflet";

// Only import Leaflet if we're on the client side
let L: any;
if (typeof window !== "undefined") {
  L = require("leaflet");
}

import { MapMarker } from "@/types/global";

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

const createMapMarkers = ({ foodTrucks, currentLocation }: MapMarker) => {
  return (
    <>
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
        <Marker
          key={truck.objectid}
          position={[truck.latitude, truck.longitude]}
          icon={icons.default}
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
      ))}
    </>
  );
};

export default createMapMarkers;
