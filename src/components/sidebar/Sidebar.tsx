"use client";

import { FC, useState } from "react";

import { SidebarHeader, SidebarSearch, TruckList } from "@/components/sidebar";
import { useNearbyFoodTrucks } from "@/hooks/useNearbyFoodTrucks";
import { useLocation } from "@/context";

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const { currentLocation } = useLocation();
  const { data: foodTrucks = [], isLoading } = useNearbyFoodTrucks(
    currentLocation,
    query
  );

  const uniqueVendors = new Set(
    foodTrucks.map((foodTruck) => foodTruck.applicant)
  );

  if (isOpen) {
    return (
      <button
        onClick={() => setIsOpen(false)}
        className="w-12 bg-purple-900/50 text-yellow-300 hover:bg-purple-800/50 transition-colors border-l border-purple-700"
      >
        ▶
      </button>
    );
  }

  return (
    <div className="w-96 bg-purple-900/50 border-l border-purple-700">
      <SidebarHeader
        trucksCount={foodTrucks.length}
        locationsCount={uniqueVendors.size}
        onCollapse={() => setIsOpen(true)}
      />

      <SidebarSearch value={query} onChange={setQuery} />

      <TruckList trucks={foodTrucks} isLoading={isLoading} />
    </div>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
