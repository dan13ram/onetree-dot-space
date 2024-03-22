import { VStack, Heading, Text } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <VStack maxW="50rem" spacing={8}>
      <Heading>Welcome to OneTree Space</Heading>
      <Text>{`OneTree Space - a hub of creativity and purpose in the digital world. Explore my portfolio, find inspiration, and let's collaborate on projects that make a difference.`}</Text>
      <Text>
        {`Hey there! I'm Dan, the driving force behind OneTree Space. With a passion for web3 and a commitment to excellence, I deliver top-notch digital solutions that exceed expectations. Let's work together to create something extraordinary for a better tomorrow.`}
      </Text>
    </VStack>
  );
};

export default Home;
