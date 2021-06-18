import React from "react";
import styles from "./style.module.scss";
import { Flex, Container, Heading, Box, Image, Button } from "@chakra-ui/react";
import Img from "../../../assets/images/Road trip_Monochromatic.png";
import { AiFillCar } from "react-icons/ai";
import { ImUserPlus } from "react-icons/im";

const Hero = () => {
  return (
    <div className={styles.main}>
      <Container maxW="container.xl" height="100%">
        <Flex justifyContent="space-between" alignItems="center" height="100%">
          <Box display="flex" flexDirection="column">
            <Heading as="h2" fontSize="5rem" fontWeight="800">
              Best Car For Rent Today
            </Heading>
            <Box display="flex" alignItems="center" mt={7}>
              <Button colorScheme="blue" mr={6} leftIcon={<ImUserPlus />}>
                Register
              </Button>
              <Button colorScheme="blue" leftIcon={<AiFillCar />}>
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
    </div>
  );
};

export default Hero;
