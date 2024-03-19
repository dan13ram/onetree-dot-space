"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { useLayoutEffect } from "react";

import { theme } from "@/utils/theme";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  useLayoutEffect(() => {
    window.localStorage.setItem("chakra-ui-color-mode", "dark");
  }, []);

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
