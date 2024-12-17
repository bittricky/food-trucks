"use client";

import { FC } from "react";
import dynamic from "next/dynamic";
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

const MapContainer: FC<MapContainerProps> = ({ center, children }) => {
  if (typeof window === "undefined") return null;

  return (
    <div className="w-full h-full">
      <LeafletMapContainer center={center} zoom={13} style={{ width: "100%", height: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {children}
      </LeafletMapContainer>
    </div>
  );
};

MapContainer.displayName = "MapContainer";

export default MapContainer;
