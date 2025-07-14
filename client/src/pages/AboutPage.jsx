import { 
    Box,
    Flex,
    Heading,
    Text
 } from "@chakra-ui/react";


function AboutPage() {
  return (
    <Box p={8} maxW="fit-content" mx="auto">
      <Flex
        wrap="wrap"
        justifyContent={{ base: "center", md: "flex-start" }}
        alignItems="flex-end"
        mb={8}
        gap={4}
      >
        <Box mt={10}>
          <Heading as="h1" size="3xl" mb={4} color="darkblue" textAlign={'center'}>
            About
          </Heading>
          <Text fontSize="lg" color="gray.700" maxW="6xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default AboutPage;
