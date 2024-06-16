"use client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { NextUIProvider } from "@nextui-org/react";
import { useState } from "react";
import useUser from "@/customHooks/useUser";

export function Providers({ children }: { children: React.ReactNode }) {
  const { data, isLoading, error } = useUser();

  return <NextUIProvider>{children}</NextUIProvider>;
}
