import React from "react";
import { LinkBox, Box, Heading, Text, Image } from "@chakra-ui/react";
const VehicleCard = () => {
  return (
    <LinkBox
      backgroundColor="blue.900"
      as="article"
      maxW="sm"
      rounded="md"
      m={2}
      onClick={() => {
        console.log("hello");
      }}
      cursor="pointer"
    >
      <Box>
        <Image
          rounded="md"
          roundedBottomLeft={0}
          roundedBottomRight={0}
          src="https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"
          alt="Segun Adebayo"
          objectFit="cover"
          width="100%"
        />
      </Box>
      <Box padding={3}>
        <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
          13 days ago
        </Box>
        <Heading size="md" my="2">
          Hello
        </Heading>
        <Text mb="3">
          Catch up on what’s been cookin’ at Smashing and explore some of the
          most popular community resources.
        </Text>
        <Box color="teal.400" fontWeight="bold">
          Some inner link
        </Box>
      </Box>
    </LinkBox>
  );
};

export default VehicleCard;
