import { FC } from "react";

import { Sidebar } from "@/components/sidebar";
import { FoodTruckMap } from "@/components/map";

const Page: FC = () => {
  return (
    <main className="h-screen flex flex-col">
      <div className="flex-1 flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 relative">
          <FoodTruckMap />
        </div>
      </div>
    </main>
  );
};

export default Page;
