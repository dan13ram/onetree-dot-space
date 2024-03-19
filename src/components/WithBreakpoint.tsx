"use client";

import { useBreakpointValue } from "@chakra-ui/react";

type Breakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl";

type BreakpointProps = {
  [key in Breakpoint]: boolean;
};

export const WithBreakpoint: React.FC<
  React.PropsWithChildren<Partial<BreakpointProps>>
> = ({ children, ...props }) => {
  const shouldDisplay = useBreakpointValue(props);
  return shouldDisplay ? <>{children}</> : null;
};
