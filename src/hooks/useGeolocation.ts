import { useState } from "react";

import { useLocation } from "@/context";

export const useGeolocation = () => {
  const { setCurrentLocation } = useLocation();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
          );
          const data = await response.json();

          setCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            name: data.display_name,
          });
        } catch (error) {
          setCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          console.error(error);
        }
        setLoading(false);
      },
      (error) => {
        setError(`${error.message || "Unable to retrieve your location"}`);
        setLoading(false);
      }
    );
  };

  return { getCurrentLocation, loading, error };
};
