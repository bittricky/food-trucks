export interface Location {
  latitude: number;
  longitude: number;
  name?: string;
}

export interface LocationWithDistance extends Location {
  distance: number;
}

export interface LocationContextType {
  currentLocation: Location;
  setCurrentLocation: (location: Location) => void;
}

export interface LocationSearchResult {
  lat: string;
  lon: string;
  display_name: string;
}

export interface SidebarHeaderProps {
  trucksCount: number;
  locationsCount: number;
  onCollapse: () => void;
}

export interface SidebarSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export interface TruckListProps {
  trucks: FoodTruck[];
  isLoading: boolean;
}

export interface TruckCardProps {
  truck: FoodTruck;
}

export interface MapMarker {
  foodTrucks: FoodTruck[];
  currentLocation: Location;
}

export interface FoodTruck {
  objectid: string;
  applicant: string;
  facilitytype: string;
  address: string;
  fooditems: string;
  latitude: number;
  longitude: number;
  status: string;
  dayshours?: string;
}
