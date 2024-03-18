"use client";

import { theme } from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { useLayoutEffect } from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    window.localStorage.setItem("chakra-ui-color-mode", "dark");
  }, []);

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
