import React from "react";

import { Sidebar } from "@/components/sidebar";
import RootLayout from "@/app/layout";

const Page: React.FC = async () => {
  return (
    <RootLayout>
      <main className="h-screen flex flex-col">
        <div className="flex-1 flex flex-col md:flex-row">
          <Sidebar />
          <div className="flex-1 relative">
            {/* { TODO: Add Food Truck Map } */}
          </div>
        </div>
      </main>
    </RootLayout>
  );
};

export default Page;
