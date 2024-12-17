import { FC } from "react";

import { Sidebar } from "@/components/sidebar";
import { FoodTruckMap } from "@/components/map";
import RootLayout from "@/app/layout";

const Page: FC = async () => {
  return (
    <RootLayout>
      <main className="h-screen flex flex-col">
        <div className="flex-1 flex flex-col md:flex-row">
          <Sidebar />
          <div className="flex-1 relative">
            <FoodTruckMap />
          </div>
        </div>
      </main>
    </RootLayout>
  );
};

export default Page;
