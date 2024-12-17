"use client";

import { createContext, useContext, useState } from "react";
import { Location, LocationContextType } from "@/types/global";

const defaultLocation: Location = {
  latitude: 37.7749,
  longitude: -122.4194,
  name: "San Francisco",
};

const LocationContext = createContext<LocationContextType>({
  currentLocation: defaultLocation,
  setCurrentLocation: () => {},
});

export const LocationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentLocation, setCurrentLocation] =
    useState<Location>(defaultLocation);

  return (
    <LocationContext.Provider value={{ currentLocation, setCurrentLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
