import type { FoodTruck, Location, LocationSearchResult } from "@/types/global";

export async function getFoodTrucks(
  location: Location,
  query?: string,
  radius: number = 5
): Promise<FoodTruck[]> {
  const params = new URLSearchParams({
    lat: location.latitude.toString(),
    lon: location.longitude.toString(),
    radius: radius.toString(),
  });

  if (query) {
    params.append("query", query);
  }

  const response = await fetch(`/api/food-trucks?${params.toString()}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export async function searchLocation(
  query: string
): Promise<LocationSearchResult | null> {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      query
    )}&limit=1`
  );

  if (!response.ok) {
    throw new Error("Failed to search location");
  }

  const data = await response.json();
  return data[0] || null;
}
