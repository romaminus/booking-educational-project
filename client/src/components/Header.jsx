import { Box, Flex, Button, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  return (
    <Box
      bg="lightgray"
      px={4}
      py={2}
      boxShadow="lg"
      w="full"
      borderBottom="1px solid"
      borderColor="darkblue"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Text
            as={RouterLink}
            to="/"
            fontSize="xl"
            fontWeight="bold"
            color="orange.500"
          >
            Booking
          </Text>
        </Flex>

        <Spacer />

        <Flex alignItems="center">
          <Button
            as={RouterLink}
            to="/"
            color={"orange.600"}
            fontWeight="bold"
            variant="ghost"
            mr={2}
            _hover={{ bg: 'darkblue' }}
          >
            Main
          </Button>
          <Button
            as={RouterLink}
            to="/about"
            color={"orange.600"}
            fontWeight="bold"
            variant="ghost"
            mr={2}
            _hover={{ bg: 'darkblue' }}
          >
            About
          </Button>
          <Button
            as={RouterLink}
            to="/hotels"
            color={"orange.600"}
            fontWeight="bold"
            variant="ghost"
            _hover={{ bg: 'darkblue' }}
          >
            Hotels
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
