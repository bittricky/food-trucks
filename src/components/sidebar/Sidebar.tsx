"use client";

import { FC, useState } from "react";

import { SidebarHeader, SidebarSearch } from "@/components/sidebar";
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
        className="w-12 bg-white-50 text-purple-500 hover:bg-white-50 transition-colors"
      >
        ▶
      </button>
    );
  }

  return (
    <div className="w-full md:w-96 bg-white text-purple-500 h-full overflow-hidden">
      <SidebarHeader
        trucksCount={foodTrucks.length}
        locationsCount={uniqueVendors.size}
        onCollapse={() => setIsOpen(true)}
      />

      <SidebarSearch value={query} onChange={setQuery} isLoading={isLoading} />

      {/* TODO: Truck List */}
    </div>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
