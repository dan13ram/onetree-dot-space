import {
  Box,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Tag,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";

import { WorkPost } from "@/content/types";

import { ExternalLinkIcon } from "./icons/ExternalLinkIcon";
import { GithubIcon } from "./icons/GithubIcon";

export const WorkTile: React.FC<WorkPost> = ({
  title,
  overview,
  thumbnail,
  links,
  tools,
}) => {
  return (
    <Box
      w="100%"
      maxW="80rem"
      minH="20rem"
      borderRadius="1rem"
      boxShadow="lg"
      bgImage={`url(${thumbnail})`}
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="stretch"
      position="relative"
      color="darkGreen.500"
    >
      <Box
        w="100%"
        bg="linear-gradient(90deg, #f4faff, 75%, rgba(255, 255, 255, 0.2));"
        display="flex"
        alignItems="stretch"
        borderRadius="1rem"
      >
        <Box
          w="100%"
          display="flex"
          alignItems="stretch"
          borderRadius="1rem"
          bg="lightGreen"
        >
          <VStack
            align="stretch"
            w="100%"
            px={{ base: 4, lg: 8 }}
            py={{ base: 4, lg: 6 }}
            spacing={6}
            justifyContent="space-between"
            borderRadius="1rem"
            transition="background-color 0.25s"
            _hover={{
              bg: "rgba(244, 250, 255, 0.5)",
            }}
          >
            <VStack align="stretch" w="100%">
              <Heading fontWeight="700" pr="3.75rem">
                {title}
              </Heading>
              <SimpleGrid
                templateColumns={{ base: "1fr", lg: "2fr 1fr", xl: "1fr 1fr" }}
                spacing={4}
                mt="1rem"
              >
                <Text fontWeight="500">{overview}</Text>
              </SimpleGrid>
            </VStack>
            <VStack align="stretch" w="100%">
              <Wrap mt="1.5rem">
                {tools.map((tool) => (
                  <Tag
                    key={tool}
                    colorScheme="darkGreen"
                    color="aliceBlue.500"
                    fontFamily="mono"
                    fontSize={{ base: "xs", lg: "sm" }}
                  >
                    {tool}
                  </Tag>
                ))}
              </Wrap>
            </VStack>
          </VStack>
          <HStack
            position="absolute"
            top="0"
            right="0"
            px={5}
            py={3}
            spacing={3}
            fontSize="2xl"
          >
            {links
              .filter((link) => link.icon === "github" || link.icon === "view")
              .map((link) => (
                <Link
                  isExternal
                  key={link.url}
                  _hover={{
                    transform: "scale(1.1)",
                    color: "black.500",
                  }}
                >
                  {link.icon === "github" ? (
                    <GithubIcon />
                  ) : (
                    <ExternalLinkIcon />
                  )}
                </Link>
              ))}
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};
