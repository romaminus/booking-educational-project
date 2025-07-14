import { Box, Text } from '@chakra-ui/react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box 
      bg="lightgray" 
      py={4} 
      textAlign="center" 
      w="full"
      borderTop="1px solid"
      borderColor="darkblue"
      >
      <Text fontSize="sm" color="orange.600">
        &copy; {currentYear} Booking. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;