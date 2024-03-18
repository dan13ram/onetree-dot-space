import type { Metadata } from "next";
import { Providers } from "./providers";
import { fonts } from "./fonts";
import { NavBar } from "@/components/NavBar";
import { VStack } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "OneTree Space",
  description: "OneTree Space",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
}
