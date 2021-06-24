import React, { useState, useEffect } from "react";
import { Box, Container, Stack, Image, Text, Button } from "@chakra-ui/react";
import { IoIosCompass } from "react-icons/io";
import styles from "./style.module.scss";
import { VehicleProp } from '../../../interface/interface';
import axios from "axios";
import OrderForm from "../OrderForm/OrderForm";

interface Prop {
  registration_number: string
}
const VehicleMain = ({ registration_number }: Prop) => {

  const [showOrderForm, setShowOrderForm] = useState(false);
  const [vehicle, setVehicle] = useState<VehicleProp>();

  const [currentImage, setCurrentImage] = useState(vehicle?.image_front_view || "http://127.0.0.1:8081/pexels-photo-158971.jpeg");

  async function getData() {
    const res = await axios.get(`http://localhost:8080/Easy_Car_Rental_Backend_war_exploded/api/v1/vehicle/${registration_number}`);
    console.log(res);
    setVehicle(res.data.data);
  }

  function setImageURL(value: string) {
    if (value === undefined) {
      value = "pexels-photo-158971.jpeg"
    }
    // @ts-ignore  
    let res = value.split("C:\\Users\\brian\\Desktop\\work\\easy-car-rental-private-limited\\Easy-Car-Rental-Backend\\target\\Easy-Car-Rental-Backend-1.0.000\\uploads/").pop().trim();
    return 'http://127.0.0.1:8081/' + res;

  }
  useEffect(() => {
    // setVehicle_id(registration_number)
    getData();
    window.scrollTo(0, 0)
    return () => {

    }
  }, [])


  return (

    <Box className={`mainBackgrounds`} pt={"40"}>
      {console.log(vehicle)}
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
            // @ts-ignore 
            src={currentImage}
            alt="Car"
            width="28rem"
          />
        </Box>
        {console.log(currentImage)}
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
            src={setImageURL(vehicle?.image_front_view)}
            alt="Segun Adebayo"
            onClick={() => {
              setCurrentImage(setImageURL(vehicle?.image_front_view))
            }}
          />
          <Image
            className={styles.imageCard}
            padding={1}
            boxSize="100px"
            objectFit="cover"
            src={setImageURL(vehicle?.image_back_view)}
            alt="Segun Adebayo"
            onClick={() => {
              setCurrentImage(setImageURL(vehicle?.image_back_view))
            }}
          />
          <Image
            className={styles.imageCard}
            padding={1}
            boxSize="100px"
            objectFit="cover"
            src={setImageURL(vehicle?.image_interior_view)}
            alt="Segun Adebayo"
            onClick={() => {
              setCurrentImage(setImageURL(vehicle?.image_interior_view))
            }}
          />
          <Image
            className={styles.imageCard}
            padding={1}
            boxSize="100px"
            objectFit="cover"
            src={setImageURL(vehicle?.image_side_view)}
            alt="Segun Adebayo"
            onClick={() => {
              setCurrentImage(setImageURL(vehicle?.image_side_view))
            }}
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
              {vehicle?.brand} {"-"} {vehicle?.type}
            </Text>
            <Text fontSize="1xl" color="#DBDBE3">
              {vehicle?.registration_number}
            </Text>
            <Text fontSize="1xl" color="#ffffff" fontWeight="700">
              Vehicle Color: {vehicle?.color}
            </Text>
            <Text fontSize="1xl" color="#ffffff" fontWeight="700">
              No Of Passengers : {vehicle?.no_Of_Passengers}
            </Text>
            <Text fontSize="1xl" color="#ffffff" fontWeight="700">
              Fuel Type : {vehicle?.fuel_Type}
            </Text>
            <Text fontSize="1xl" color="#ffffff" fontWeight="700">
              Free Km for a Day : {vehicle?.free_Km_for_a_Day}
            </Text>
            <Text fontSize="1xl" color="#ffffff" fontWeight="700">
              Free Km for a Month : {vehicle?.free_Km_for_a_month}
            </Text>
          </Stack>
          <Stack spacing={3} width="100%">
            <Text fontSize="1xl" color="#ffffff" fontWeight="700">
              Transmission Type: {vehicle?.transmission_type}
            </Text>
            <Text fontSize="1xl" color="#ffffff" fontWeight="700">
              Daily Rate: {vehicle?.daily_Rate}
            </Text>
            <Text fontSize="1xl" color="#ffffff" fontWeight="700">
              Monthly Rate : {vehicle?.monthly_Rate}
            </Text>
            <Text fontSize="1xl" color="#ffffff" fontWeight="700">
              Price Per Extra KM : {vehicle?.price_per_Extra_KM}
            </Text>
          </Stack>
        </Box>

        <Box mb={"5"}>

          <OrderForm />
        </Box>
      </Container>

    </Box>
  );
};

export default VehicleMain;
