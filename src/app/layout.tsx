import { VStack } from "@chakra-ui/react";
import type { Metadata } from "next";

import { NavBar } from "@/components/NavBar";

import { fonts } from "./fonts";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "OneTree Space",
  description: "OneTree Space",
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={fonts.rubik.variable}>
        <Providers>
          <NavBar />
          <VStack spacing={8} p={8} w="100%">
            {children}
          </VStack>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
