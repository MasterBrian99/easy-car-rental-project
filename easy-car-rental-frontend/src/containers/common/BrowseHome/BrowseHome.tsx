import { Container, Button, Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import ContainerHeader from "../../../components/common/ContainerHeader/ContainerHeader";
import VehicleCard from "../../../components/common/VehicleCard/VehicleCard";
import { HiCursorClick } from "react-icons/hi";
import { VehicleProp } from '../../../interface/interface'
import axios from "axios";


const BrowseHome = () => {
  const [vehicle, setVehicle] = useState<VehicleProp[]>([]!);

  async function getData() {
    const res = await axios.get('http://localhost:8080/Easy_Car_Rental_Backend_war_exploded/api/v1/vehicle');
    console.log(res)
    setVehicle(res.data.data)
  }

  useEffect(() => {

    getData();

    return () => {
    }
  }, [])

  return (
    <div className={`mainBackgrounds`}>
      <ContainerHeader />

      <Container maxW="container.xl" height="100%">
        <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
          {vehicle.map((el, i) =>
            <VehicleCard
              key={i}
              registration_number={el.registration_number}
              available={el.available}
              brand={el.brand}
              color={el.color}
              type={el.type}
              image_front_view={el.image_front_view}
            />
          )}
        </Flex>
        <Container centerContent mt={8}>
          <Button colorScheme="blue" leftIcon={<HiCursorClick />} >
            See More
          </Button>
        </Container>
      </Container>
    </div>
  );
};

export default BrowseHome;
