import { VStack } from "@chakra-ui/react";
import type { Metadata } from "next";

import { Fonts } from "@/components/Fonts";
import { NavBar } from "@/components/NavBar";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "OneTree Space",
  description: "OneTree Space",
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Fonts />
          <NavBar />
          <VStack spacing={8} p={{ base: 4, md: 6, lg: 8 }} w="100%">
            {children}
          </VStack>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
