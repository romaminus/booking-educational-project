import { Box, Grid, Heading, Text, Flex } from "@chakra-ui/react";
import HotelCard from "../components/HotelCard";
import useBookingStore from "../store/useBookingStore";

function HotelsPage() {
  const { hotels } = useBookingStore();
  return (
    <Box
      m="10px 20px"
      wrap="wrap"
      justifyContent={{ base: "center", md: "flex-start" }}
      alignItems="flex-end"
      mb={8}
      gap={4}
    >
      <Heading as="h1" size="3xl" mb={4} color="darkblue" textAlign={"center"}>
        Hotels
      </Heading>
      {hotels.length > 0 ? (
        <Grid templateColumns="repeat(4, 1fr)" gap="6">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </Grid>
      ) : (
        <Flex align="center" justify="center" minH="200px">
          <Text fontSize="lg" color="gray.700" textAlign="center">
            Select a destination to see hotels!
          </Text>
        </Flex>
      )}
    </Box>
  );
}

export default HotelsPage;
