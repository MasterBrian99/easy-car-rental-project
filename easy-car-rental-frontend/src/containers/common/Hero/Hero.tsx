import React from "react";
import { Flex, Container, Heading, Box, Image, Button } from "@chakra-ui/react";
import Img from "../../../assets/images/Road trip_Monochromatic.png";
import { AiFillCar } from "react-icons/ai";
import { ImUserPlus } from "react-icons/im";
import { useHistory } from "react-router-dom";

const Hero = () => {
  const history = useHistory();
  return (
    <Box className={`mainBackgrounds`} pt={"40"}>
      <Container maxW="container.xl" height="100%">
        <Flex justifyContent="space-between" alignItems="center" height="100%">
          <Box display="flex" flexDirection="column">
            <Heading as="h2" fontSize="5rem" fontWeight="800">
              Best Car For Rent Today
            </Heading>
            <Box display="flex" alignItems="center" mt={7}>
              <Button
                colorScheme="blue"
                mr={6}
                leftIcon={<ImUserPlus />}
                onClick={() => {
                  history.push("/register");
                }}
              >
                Register
              </Button>
              <Button
                colorScheme="blue"
                leftIcon={<AiFillCar />}
                onClick={() => {
                  history.push("/browse");
                }}
              >
                View Vehicles
              </Button>
            </Box>
          </Box>
          <Box>
            <Image
              src={Img}
              alt="Segun Adebayo"
              objectFit="cover"
              width="55rem"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
