"use client";

import { useQuery } from "@tanstack/react-query";
import { getFoodTrucks } from "@/utils/api";
import { Location } from "@/types/global";

export const useNearbyFoodTrucks = (location: Location, query?: string) => {
  return useQuery({
    queryKey: ["foodTrucks", location, query],
    queryFn: () => getFoodTrucks(location, query),
  });
};
