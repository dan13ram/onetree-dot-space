"use client";

import {
  Heading,
  HStack,
  Image,
  Link,
  Tag,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";

import { WorkPost } from "@/content/types";

export const SectionTitle: React.FC<{ children: string }> = ({ children }) => (
  <Text
    w="100%"
    mt={8}
    fontSize="md"
    fontFamily="subheading"
    textTransform="uppercase"
    color="asparagus.700"
  >
    {children}
  </Text>
);

export const WorkDisplay: React.FC<WorkPost> = ({
  title,
  description,
  methodology,
  challenges,
  results,
  images,
  links,
  tools,
}) => {
  return (
    <VStack w="100%" fontSize="lg" spacing={8}>
      <Heading fontWeight="700">{title}</Heading>
      <Wrap>
        {tools.map((tool) => (
          <Tag
            key={tool}
            colorScheme="darkGreen"
            fontFamily="mono"
            fontSize={{ base: "xs", lg: "sm" }}
          >
            {tool}
          </Tag>
        ))}
      </Wrap>
      <Text>{description}</Text>
      <Text>{methodology}</Text>
      <Text>{challenges}</Text>
      <Text>{results}</Text>
      <VStack w="100%" mt={8} spacing={8}>
        {images.map((image) => (
          <Image src={image} key={image} width="100%" alt={title} />
        ))}
      </VStack>
      <VStack w="100%">
        {links.map((link) => (
          <HStack key={link.url} spacing={4} w="100%">
            <Link href={link.url} key={link.url}>
              {link.url}
            </Link>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};
