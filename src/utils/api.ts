import type { FoodTruck, Location } from "@/types/global";

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
