"use client";

import { FC, useState } from "react";
import { Search, Loader2 } from "lucide-react";

import { searchLocation } from "@/utils/api";
import { useLocation } from "@/context";

const LocationSearch: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { setCurrentLocation } = useLocation();

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setError(null);

    try {
      const location = await searchLocation(searchQuery);

      if (location) {
        setCurrentLocation({
          latitude: parseFloat(location.lat),
          longitude: parseFloat(location.lon),
          name: location.display_name,
        });
        setSearchQuery("");
      } else {
        setError("Location not found. Please try a different search term.");
      }
    } catch (error) {
      setError("Error searching location. Please try again.");
      console.error(error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search any location..."
          className="w-full px-10 py-2 bg-white text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder:text-gray-500"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          size={18}
        />
        {isSearching ? (
          <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 animate-spin" />
        ) : (
          <button
            onClick={handleSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Search location"
          >
            <Search size={20} className="text-gray-600" />
          </button>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-500 bg-red-50 p-2 rounded-md">
          {error}
        </p>
      )}
    </div>
  );
};

LocationSearch.displayName = "LocationSearch";

export default LocationSearch;
