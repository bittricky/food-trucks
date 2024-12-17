import { FC, memo } from "react";

import { TruckCard } from "@/components/sidebar";
import { TruckListProps } from "@/types/global";

const TruckList: FC<TruckListProps> = ({ trucks, isLoading }) => {
  if (trucks.length === 0) {
    return (
      <div className="p-4 text-center text-purple-500">
        <p>No food trucks found matching your search.</p>
        <p className="text-sm mt-2">
          Try different keywords or clear your search.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 overflow-y-auto h-[calc(100vh-128px)]">
      {isLoading && (
        <div className="flex flex-col gap-4">
          {trucks.map((truck) => (
            <TruckCard key={truck.objectid} truck={truck} />
          ))}
        </div>
      )}
    </div>
  );
};

TruckList.displayName = "TruckList";

export default memo(TruckList);
