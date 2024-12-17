import { NextResponse } from "next/server";
import { FoodTruck } from "@/types/global";
import { calculateDistance } from "@/utils/distance";

//TODO: get food truck data from a separate api for all search locations - 12/17/2024
const FOOD_TRUCKS_API = "https://data.sfgov.org/resource/rqzj-sfat.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase() || "";
  const lat = parseFloat(searchParams.get("lat") || "37.7749");
  const lon = parseFloat(searchParams.get("lon") || "-122.4194");
  const radius = parseFloat(searchParams.get("radius") || "5");

  try {
    const response = await fetch(FOOD_TRUCKS_API);
    if (!response.ok) {
      throw new Error("Failed to fetch food trucks");
    }

    const trucks: FoodTruck[] = await response.json();

    const filteredTrucks = trucks.filter((truck) => {
      const matchesSearch =
        !query ||
        truck.applicant.toLowerCase().includes(query) ||
        truck.fooditems?.toLowerCase().includes(query);

      const distance = calculateDistance(
        lat,
        lon,
        truck.latitude,
        truck.longitude
      );

      return matchesSearch && distance <= radius;
    });

    return NextResponse.json(filteredTrucks);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch food trucks" },
      { status: 500 }
    );
  }
}
