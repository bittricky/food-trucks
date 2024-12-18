"use client";

import { FC } from "react";

import { useLocation } from "@/context";
import { useNearbyFoodTrucks } from "@/hooks/useNearbyFoodTrucks";
import { MapContainer, LocationControl } from "@/components/map";
import MapMarkers from "@/utils/map";

const FoodTruckMap: FC = () => {
  const { currentLocation } = useLocation();
  const { data: foodTrucks = [] } = useNearbyFoodTrucks(currentLocation);

  return (
    <>
      <MapContainer
        center={[currentLocation.latitude, currentLocation.longitude]}
      >
        <MapMarkers foodTrucks={foodTrucks} currentLocation={currentLocation} />
      </MapContainer>
      <LocationControl />
    </>
  );
};

FoodTruckMap.displayName = "FoodTruckMap";

export default FoodTruckMap;
