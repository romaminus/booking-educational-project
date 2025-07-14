import { useRouteError } from "react-router-dom";
import { Box, Heading, Text, Button, Image, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import errorImage from "../img/errorImage.webp";

function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error("Routing error:", error);

  return (
    <Box
      textAlign="center"
      py={10}
      px={6}
      bg="#362c28"
      color="white"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={6}>
        <Image
          src={errorImage}
          alt="Oops"
          maxW='500px'
          borderRadius="lg"
          boxShadow="2xl"
        />

        <Heading as="h1" size="2xl" color="orange.400">
          Well, that’s not supposed to be there...
        </Heading>

        <Text fontSize="lg" color="gray.300">
          Either you took a wrong turn, or someone’s been messing around with the routes again.
          <br />
          Let’s pretend we didn’t see this and get out before it gets proper ugly.
        </Text>
        <Text>{error?.error?.message || "idk"}</Text>

        <Button
          colorScheme="orange"
          variant="solid"
          size="lg"
          onClick={() => navigate("/")}
        >
          Take me back, before things get messy
        </Button>
      </VStack>
    </Box>
  );
}

export default ErrorPage;
