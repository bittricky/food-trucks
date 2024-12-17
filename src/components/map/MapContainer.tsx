"use client";

import { FC, useEffect } from "react";
import dynamic from "next/dynamic";

import { MapContainerProps } from "@/types/global";

const LeafletMapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const MapContainer: FC<MapContainerProps> = ({ center, children }) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  if (typeof window === "undefined") return null;

  return (
    <LeafletMapContainer center={center} zoom={13} className="w-full h-full">
      <TileLayer
        attribution='© <a href="https://www.mapbox.com/">Mapbox</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {children}
    </LeafletMapContainer>
  );
};

MapContainer.displayName = "MapContainer";

export default MapContainer;
