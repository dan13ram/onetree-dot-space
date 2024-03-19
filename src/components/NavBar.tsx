"use client";

import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  HStack,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/art", label: "Art" },
];

const socials = [
  {
    href: "https://github.com/dan13ram",
    label: "GitHub",
    icon: "/socials/github.svg",
  },
  {
    href: "https://instagram.com/dan13ram",
    label: "Instagram",
    icon: "/socials/instagram.svg",
  },
  {
    href: "https://twitter.com/dan13ram",
    label: "Twitter",
    icon: "/socials/twitter.svg",
  },
  // { href: "https://linkedin.com/in/dan13ram", label: "LinkedIn", icon: "/socials/linkedin.svg" },
  {
    href: "https://metagame.wtf/player/dan13ram",
    label: "MetaGame",
    icon: "/socials/metagame.svg",
  },
];

const DesktopNavBar = () => {
  return (
    <VStack
      w="6rem"
      h="100vh"
      p="2rem 0"
      justify="space-between"
      position="fixed"
      top="0"
      left="0"
      bg="darkGreen.500"
      color="aliceBlue.500"
    >
      <VStack>
        <Link
          href="/"
          fontFamily="subheading"
          _hover={{
            color: "asparagus.500",
          }}
          w="100%"
          textAlign="center"
        >
          home
        </Link>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            fontFamily="subheading"
            _hover={{
              color: "asparagus.500",
            }}
            w="100%"
            textAlign="center"
          >
            {link.label.toLowerCase()}
          </Link>
        ))}
      </VStack>
      <VStack spacing="1rem">
        {socials.map((social) => (
          <Link
            isExternal
            key={social.href}
            href={social.href}
            _hover={{ transform: "scale(1.1)" }}
          >
            <Image
              src={social.icon}
              alt={social.label}
              width="32"
              height="32"
            />
          </Link>
        ))}
      </VStack>
    </VStack>
  );
};

const MobileNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Drawer placement="bottom" size="full" onClose={onClose} isOpen={isOpen}>
        <DrawerContent pb="6rem" bg="darkGreen.500">
          <DrawerHeader>
            <HStack spacing="1rem" w="100%" justify="center">
              {socials.map((social) => (
                <Link
                  isExternal
                  key={social.href}
                  href={social.href}
                  _hover={{ transform: "scale(1.1)" }}
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width="32"
                    height="32"
                  />
                </Link>
              ))}
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <VStack justify="center" h="100%" spacing="1rem">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  fontFamily="subheading"
                  color="aliceBlue.500"
                  fontSize="xl"
                  _hover={{
                    color: "asparagus.500",
                  }}
                  w="100%"
                  textAlign="center"
                >
                  {link.label.toLowerCase()}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <HStack
        w="100vw"
        h="5rem"
        p="0 2rem"
        justify="space-between"
        position="fixed"
        bottom="0"
        left="0"
        bg="darkGreen.500"
        color="aliceBlue.500"
        zIndex="9999"
      >
        <Link
          href="/"
          fontFamily="subheading"
          _hover={{
            color: "asparagus.500",
          }}
        >
          home
        </Link>

        <Box
          w="32px"
          h="25px"
          onClick={isOpen ? onClose : onOpen}
          cursor="pointer"
          role="group"
        >
          <Box
            w="100%"
            h="3px"
            bg="aliceBlue.500"
            transition="all 0.5s"
            transform={isOpen ? "rotate(405deg) translate(8px, 8px)" : "none"}
            _groupHover={{
              bg: "asparagus.500",
            }}
          />
          <Box
            w="100%"
            h="3px"
            bg="aliceBlue.500"
            transition="all 0.5s"
            _groupHover={{
              bg: "asparagus.500",
            }}
            transform={isOpen ? "scale(0)" : "none"}
            mt="8px"
          />
          <Box
            w="100%"
            h="3px"
            bg="aliceBlue.500"
            transition="all 0.5s"
            transform={isOpen ? "rotate(-225deg) translate(-8px, 8px)" : "none"}
            _groupHover={{
              bg: "asparagus.500",
            }}
            mt="8px"
          />
        </Box>
      </HStack>
    </>
  );
};

export const NavBar: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return isMobile ? <MobileNavBar /> : <DesktopNavBar />;
};
