import { FC } from "react";
import { MapPin, Clock } from "lucide-react";

import { useLocation } from "@/context";
import { calculateDistance } from "@/utils/distance";
import { TruckCardProps } from "@/types/global";

const TruckCard: FC<TruckCardProps> = ({ truck }) => {
  const { currentLocation } = useLocation();
  const distance = calculateDistance(
    currentLocation.latitude,
    currentLocation.longitude,
    truck.latitude,
    truck.longitude
  );

  return (
    <div className="mb-4 p-4 rounded-lg bg-white-50 hover:bg-white-100 cursor-pointer transition-colors">
      <h3 className="text-purple-500 text-lg font-bold mb-2">
        {truck.applicant}
      </h3>
      <div className="flex items-center text-gray-400 mb-2">
        <MapPin size={16} className="mr-2" />
        <span>{distance.toFixed(2)}km away</span>
      </div>
      {truck.dayshours && (
        <div className="flex items-center text-gray-400 mb-2">
          <Clock size={16} className="mr-2" />
          <span>{truck.dayshours}</span>
        </div>
      )}
      <p className="text-sm text-gray-300">
        Serves {truck.fooditems?.toLowerCase() || "various items"}
      </p>
    </div>
  );
};

TruckCard.displayName = "TruckCard";

export default TruckCard;
