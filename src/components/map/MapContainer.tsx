"use client";

import { FC, useEffect } from "react";
import dynamic from "next/dynamic";
import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { MapContainerProps } from "@/types/global";

const LeafletMapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const MapCenterHandler: FC<{ center: [number, number] }> = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, map.getZoom(), {
      animate: true,
    });
  }, [center, map]);

  return null;
};

const MapContainer: FC<MapContainerProps> = ({ center, children }) => {
  if (typeof window === "undefined") return null;

  return (
    <div className="w-full h-full">
      <LeafletMapContainer
        center={center}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        <MapCenterHandler center={center} />
        <TileLayer
          attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {children}
      </LeafletMapContainer>
    </div>
  );
};

MapContainer.displayName = "MapContainer";

export default MapContainer;
