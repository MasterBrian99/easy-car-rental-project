import { Container, Button, Flex } from "@chakra-ui/react";
import React from "react";
import ContainerHeader from "../../../components/common/ContainerHeader/ContainerHeader";
import VehicleCard from "../../../components/VehicleCard/VehicleCard";
import styles from "./style.module.scss";
import { HiCursorClick } from "react-icons/hi";
const BrowseHome = () => {
  return (
    <div className={`mainBackgrounds`}>
      <ContainerHeader />

      <Container maxW="container.xl" height="100%">
        <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
          <VehicleCard />
          <VehicleCard />
          <VehicleCard />
          <VehicleCard />
          <VehicleCard />
          <VehicleCard />
          <VehicleCard />
        </Flex>
        <Container centerContent mt={8}>
          <Button colorScheme="blue" leftIcon={<HiCursorClick />}>
            See More
          </Button>
        </Container>
      </Container>
    </div>
  );
};

export default BrowseHome;
