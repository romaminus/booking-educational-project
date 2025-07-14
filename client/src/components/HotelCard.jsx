import { Button, Card, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { hotelImages } from "../img/imageList";


function HotelCard({ hotel }) {
  const { name, address, id, image } = hotel;
  return (
    <Card.Root maxW="sm" overflow="hidden" bg={"gray.100"}>
      <Image
        src={hotelImages[image]}
        alt="Green double couch with wooden legs"
        maxH={200}
      />
      <Card.Body gap="2">
        <Card.Title color={"darkblue"}>{name}</Card.Title>
        <Card.Description color={"blue.700"}>{address}</Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Button
          as={RouterLink}
          to={`/hotels/${id}`}
          variant="solid"
          w={"100%"}
          bg={"gray.300"}
          color={"orange.600"}
        >
          View
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}

export default HotelCard;
