"use client";

import { FC } from "react";
import { MapPin, Navigation } from "lucide-react";

import { useLocation } from "@/context";
import { useGeolocation } from "@/hooks/useGeolocation";
import { LocationSearch } from "@/components/map";

const LocationControl: FC = () => {
  const { currentLocation } = useLocation();
  const { getCurrentLocation, loading, error } = useGeolocation();

  return (
    <div className="absolute top-4 right-4 z-[1000] bg-white p-4 rounded-lg shadow-lg w-80">
      <div className="flex flex-col space-y-4">
        <LocationSearch />

        <div className="flex items-center">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-4 text-sm text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <button
          onClick={getCurrentLocation}
          disabled={loading}
          className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-purple-500 text-gray-900 font-medium rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Navigation size={20} className={loading ? "animate-spin" : ""} />
          <span>{loading ? "Getting location..." : "Use my location"}</span>
        </button>

        <div className="flex items-start space-x-2 text-sm text-gray-600">
          <MapPin size={16} className="mt-1 flex-shrink-0" />
          <span className="break-words">
            {currentLocation.name ||
              `${currentLocation.latitude.toFixed(
                4
              )}, ${currentLocation.longitude.toFixed(4)}`}
          </span>
        </div>

        {error && (
          <p className="text-sm text-red-500 bg-red-50 p-2 rounded-md">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

LocationControl.displayName = "LocationControl";

export default LocationControl;
