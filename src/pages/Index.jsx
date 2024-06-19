import { Box, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Parallax pages={3} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={0.5}>
          <Box bg="red.500" height="100vh" display="flex" justifyContent="center" alignItems="center">
            <VStack spacing={4}>
              <Heading as="h1" size="2xl" color="white">Welcome to Chili World</Heading>
              <Text fontSize="xl" color="white">Discover the hottest sauces and products</Text>
            </VStack>
          </Box>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <Box bg="yellow.500" height="100vh" display="flex" justifyContent="center" alignItems="center">
            <VStack spacing={4}>
              <Heading as="h2" size="xl" color="black">Our Products</Heading>
              <Text fontSize="lg" color="black">Explore our wide range of chili products</Text>
            </VStack>
          </Box>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5}>
          <Box bg="green.500" height="100vh" display="flex" justifyContent="center" alignItems="center">
            <VStack spacing={4}>
              <Heading as="h2" size="xl" color="white">Contact Us</Heading>
              <Text fontSize="lg" color="white">Get in touch for more information</Text>
            </VStack>
          </Box>
        </ParallaxLayer>
      </Parallax>
    </Container>
  );
};

export default Index;