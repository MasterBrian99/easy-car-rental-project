import React from "react";
import { Container, Text } from "@chakra-ui/react";
const ContainerHeader = () => {
  return (
    <Container maxW="container.xl" centerContent>
      <Text
        fontSize="3xl"
        fontWeight="light"
        fontFamily="Libre Baskerville, serif"
      >
        - What We Have -
      </Text>
      <Text fontSize="5xl" fontWeight="bold">
        Rent A Car Of Any Brand
      </Text>
    </Container>
  );
};

export default ContainerHeader;
