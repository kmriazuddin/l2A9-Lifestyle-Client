"use client";

import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      retry: 2,
    },
  },
});
const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Provider;
