import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <Box bg="blue.500" p={4}>
      <Flex maxW="container.xl" mx="auto" align="center">
        <ScrollLink to="products" smooth={true} duration={500}>
          <Link color="white" fontSize="lg" mr={4} cursor="pointer">
            Products
          </Link>
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500}>
          <Link color="white" fontSize="lg" cursor="pointer">
            Contact Us
          </Link>
        </ScrollLink>
        <Spacer />
      </Flex>
    </Box>
  );
};

export default Header;