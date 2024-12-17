import { FC } from "react";
import { Search } from "lucide-react";

import { SidebarSearchProps } from "@/types/global";

const SidebarSearch: FC<SidebarSearchProps> = ({ value, onChange }) => {
  return (
    <div className="p-4 border-gray-500 border-white-50">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search food trucks..."
          className="w-full bg-white-50 text-purple-500 pl-10 pr-4 py-2 rounded-lg border border-white-50 focus:outline-none focus:ring-2 focus:ring-[#FFE135] focus:border-transparent placeholder-purple-500"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500"
          size={18}
        />
      </div>
    </div>
  );
};

SidebarSearch.displayName = "SidebarSearch";

export default SidebarSearch;
