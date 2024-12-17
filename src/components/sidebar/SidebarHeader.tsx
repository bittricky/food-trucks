import { FC } from "react";
import { ChevronLeft } from "lucide-react";

import { SidebarHeaderProps } from "@/types/global";

const SidebarHeader: FC<SidebarHeaderProps> = ({
  trucksCount,
  locationsCount,
  onCollapse,
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-purple-700">
      <div className="text-yellow-300">
        Found <span className="font-bold">{trucksCount}</span> vendors in{" "}
        <span className="font-bold">{locationsCount}</span> different locations
      </div>
      <button
        onClick={onCollapse}
        className="p-2 hover:bg-purple-800/50 rounded-full transition-colors"
        aria-label="Collapse sidebar"
      >
        <ChevronLeft className="text-yellow-300" />
      </button>
    </div>
  );
};

SidebarHeader.displayName = "SidebarHeader";

export default SidebarHeader;
