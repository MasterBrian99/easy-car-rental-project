import React from "react";
import { Box, Container, Stack, Image, Text, Button } from "@chakra-ui/react";
import { IoIosCompass } from "react-icons/io";
import styles from "./style.module.scss";
const VehicleMain = () => {
  return (
    <Box className={`mainBackgrounds`} pt={"40"}>
      <Container
        maxW="container.xl"
        height="100%"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box height="100%" p={5}>
          <Image
            objectFit="cover"
            src="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg"
            alt="Segun Adebayo"
          />
        </Box>
        <Stack
          direction="row"
          mt={6}
          mb={9}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Image
            className={styles.imageCard}
            padding={1}
            boxSize="100px"
            objectFit="cover"
            src="https://i.pinimg.com/originals/14/95/49/1495491430618c8f74f7e0892c2c454e.jpg"
            alt="Segun Adebayo"
          />
        </Stack>

        <Box
          p={4}
          color="white"
          width="100%"
          display="flex"
          justifyContent="space-between"
        >
          <Stack spacing={3} width="100%">
            <Text fontSize="2xl" fontWeight="600">
              Toyota Hybrid
            </Text>
            <Text fontSize="1xl" color="#DBDBE3">
              ABC-2249
            </Text>
            <Text fontSize="1xl" color="#ffffff" fontWeight="700">
              Vehicle Color: Green
            </Text>
            <Text fontSize="1xl" color="#ffffff" fontWeight="700">
              No Of Passengers : 4
            </Text>
            <Text fontSize="1xl" color="#ffffff" fontWeight="700">
              Fuel Type : Deisel
            </Text>
            <Text fontSize="1xl" color="#ffffff" fontWeight="700">
              Free Km for a Day : 22
            </Text>
            <Text fontSize="1xl" color="#ffffff" fontWeight="700">
              Free Km for a Month : 12
            </Text>
          </Stack>
          <Stack spacing={3} width="100%">
            <Text fontSize="1xl" color="#ffffff" fontWeight="700">
              Transmission Type: Auto
            </Text>
            <Text fontSize="1xl" color="#ffffff" fontWeight="700">
              Daily Rate: 2400
            </Text>
            <Text fontSize="1xl" color="#ffffff" fontWeight="700">
              Monthly Rate :3040
            </Text>
            <Text fontSize="1xl" color="#ffffff" fontWeight="700">
              Prize Per Extra KM :220
            </Text>
          </Stack>
        </Box>
        <Button colorScheme="blue" leftIcon={<IoIosCompass />}>
          Order
        </Button>
      </Container>
    </Box>
  );
};

export default VehicleMain;
