import { FC } from "react";
import { Search } from "lucide-react";

import { SidebarSearchProps } from "@/types/global";

const SidebarSearch: FC<SidebarSearchProps> = ({ value, onChange }) => {
  return (
    <div className="p-4 border-b border-purple-700">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search food trucks..."
          className="w-full bg-purple-800/50 text-white pl-10 pr-4 py-2 rounded-lg border border-purple-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent placeholder-purple-300"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-300"
          size={18}
        />
      </div>
    </div>
  );
};

SidebarSearch.displayName = "SidebarSearch";

export default SidebarSearch;
