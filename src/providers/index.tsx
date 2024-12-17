"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocationProvider } from "@/context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 2,
    },
  },
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LocationProvider>{children}</LocationProvider>
    </QueryClientProvider>
  );
};

export default Providers;
