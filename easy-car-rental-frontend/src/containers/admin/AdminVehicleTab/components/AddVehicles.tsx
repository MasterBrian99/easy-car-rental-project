import React from "react";

import { Box, ButtonGroup, Grid, Button } from "@chakra-ui/react";
import { Formik } from "formik";
import { InputControl, PercentComplete, ResetButton } from "formik-chakra-ui";
import * as Yup from "yup";
import { VehicleProp } from "../../../../interface/interface";
import axios from "axios";

const onSubmit = (values: any, actions: any) => {
  axios({
    method: "POST",
    url: "http://localhost:8080/Easy_Car_Rental_Backend_war_exploded/api/v1/vehicle/main",
    data: values,
  }).then(function (response) {
    if (response.status === 201) {
    }
    console.log(response.status);
  });
};

const initialValues: VehicleProp = {
  registration_number: "",
  brand: "",
  type: "",
  image_front_view: "",
  image_back_view: "",
  image_side_view: "",
  image_interior_view: "",
  color: "",
  no_Of_Passengers: 0,
  transmission_type: "",
  fuel_Type: "",
  daily_Rate: 0,
  monthly_Rate: 0,
  free_Km_for_a_Day: 0,
  free_Km_for_a_month: 0,
  price_per_Extra_KM: 0,
  current_KM: 0,
  available: "true",
};
const validationSchema = Yup.object({
  registration_number: Yup.string().required(),
  brand: Yup.string().required(),
  type: Yup.string().required(),
  image_front_view: Yup.mixed().nullable().notRequired(),
  image_back_view: Yup.mixed().nullable().notRequired(),
  image_side_view: Yup.mixed().nullable().notRequired(),
  image_interior_view: Yup.mixed().nullable().notRequired(),
  color: Yup.string().required(),
  no_Of_Passengers: Yup.number().required(),
  transmission_type: Yup.string().required(),
  fuel_Type: Yup.string().required(),
  daily_Rate: Yup.string().required(),
  monthly_Rate: Yup.string().required(),
  free_Km_for_a_Day: Yup.string().required(),
  free_Km_for_a_month: Yup.string().required(),
  price_per_Extra_KM: Yup.string().required(),
  current_KM: Yup.string().required(),
  available: Yup.string().required(),
});

const Form = () => {
 
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, values, errors }) => (
        <Box onSubmit={handleSubmit as any} as="form">
          <PercentComplete />
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Box>
              <InputControl
                name="registration_number"
                label="Registration number"
              />
              <InputControl name="brand" label="Brand" />

              <InputControl name="type" label="Type" />

              <InputControl name="color" label="Color" />
              <InputControl name="no_Of_Passengers" label="No Of Passengers" />
              <InputControl
                name="transmission_type"
                label="Transmission type"
              />
              <InputControl name="fuel_Type" label="Fuel Type" />
              <InputControl name="daily_Rate" label="Daily Rate" />
              <InputControl name="monthly_Rate" label="Monthly Rate" />
            </Box>
            <Box>
              <InputControl
                name="free_Km_for_a_Day"
                label="Free Km for a Day"
              />
              <InputControl
                name="free_Km_for_a_month"
                label="Free Km for a month"
              />
              <InputControl
                name="price_per_Extra_KM"
                label="Price per Extra KM"
              />
              <InputControl name="current_KM" label="Current KM" />
              <InputControl name="image_front_view" label="Image Front View" />
              <InputControl name="image_back_view" label="Image Back View" />
              <InputControl name="image_side_view" label="Image Side View" />
              <InputControl
                name="image_interior_view"
                label="Image Interior View"
              />
              <ButtonGroup mt={"2rem"}>
                <Button type="submit" colorScheme="blue">
                  Submit
                </Button>
                <ResetButton>Reset</ResetButton>
              </ButtonGroup>
            </Box>
          </Grid>
        </Box>
      )}
    </Formik>
  );
};

export default Form;

