import React, { useEffect, useState } from "react";
import {
    Box,
    Heading,
    Text,
    Badge,
    Button,
    Image,
    Flex,
    Link,
    Spinner
  } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import useBookingStore from "../store/useBookingStore";
import { hotelImages } from "../img/imageList";

function DetailsCardPage() {
  const { hotelId } = useParams();
  const navigate = useNavigate();
  const hotels = useBookingStore((state) => state.hotels);
  const [currentHotel, setCurrentHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hotels.length > 0) {
      const foundHotel = hotels.find((hotel) => hotel.id === +hotelId);

      if (foundHotel) {
        setCurrentHotel(foundHotel);
      } else {
        navigate("/hotels");
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [hotelId, hotels, navigate]);

  if (loading) {
    return (
      <Flex justify="center" align="center" minH="80vh">
        <Spinner size="xl" color="orange.500" />
      </Flex>
    );
  }

  if (!currentHotel) {
    return (
      <Box p={4} textAlign="center">
        <Heading>Готель не знайдено :(</Heading>
        <Button mt={4} onClick={() => navigate("/hotels")}>
          Back to hotels
        </Button>
      </Box>
    );
  }

  return (
    <Box
      maxW="lg"
      mx="auto"
      mt={10}
      p={6}
      borderWidth="1px"
      borderRadius="2xl"
      boxShadow="xl"
      bg="white"
    >
      <Flex direction="column" align="center" gap={4}>
        <Image
          src={hotelImages[currentHotel.image]}
          alt={currentHotel.name}
          objectFit="cover"
          borderRadius="lg"
          maxH="250px"
          w="100%"
        />

        <Heading as="h1" size="xl" textAlign="center" color="blue.800">
          {currentHotel.name}
        </Heading>

        <Text fontSize="md" color="gray.600" textAlign="center">
          {currentHotel.address}, {currentHotel.city}, {currentHotel.state},{" "}
          {currentHotel.country_code}
        </Text>

        {currentHotel.hotel_rating && (
          <Flex align="center" gap={2}>
            <Text color="gray.600">Raiting:</Text>
            <Badge colorScheme="purple" fontSize="md" p={1} borderRadius="md">
              {currentHotel.hotel_rating} / 5
            </Badge>
          </Flex>
        )}

        {currentHotel.phone_number && (
          <Text color="gray.600">Tel: {currentHotel.phone_number}</Text>
        )}

        {currentHotel.website && (
          <Text color="gray.600">
            Website:{" "}
            <Link href={currentHotel.website} isExternal color="blue.500">
              {currentHotel.website}
            </Link>
          </Text>
        )}

        <Button
          mt={6}
          colorScheme="orange"
          w="full"
          maxW="300px"
          onClick={() => navigate(-1)}
        >
          Назад
        </Button>
      </Flex>
    </Box>
  );
}

export default DetailsCardPage;
