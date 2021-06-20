import React, { useState, useEffect } from "react";

import { Box, ButtonGroup, Grid, Input } from "@chakra-ui/react";
import { Formik } from "formik";
import {
  InputControl,
  PercentComplete,
  SubmitButton,
  ResetButton,
} from "formik-chakra-ui";
import * as Yup from "yup";
import { VehicleProp } from "../../../../interface/interface";
import axios from "axios";

const onSubmit = (values: any, actions: any) => {
  axios({
    method: "POST",
    url: "http://localhost:8080/Easy_Car_Rental_Backend_war_exploded/api/v1/vehicle",
    data: values,
  }).then(function (response) {
    console.log(response);
  });
  // console.lo g(values);
};

// async function sendData(url: string, value: VehicleProp) {
//   const res = await fetch(url, {
//     method: "POST",
//     mode: "no-cors",
//     referrerPolicy: "no-referrer",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: JSON.stringify(value),
//   });
//   return res.json();
// }

const initialValues: VehicleProp = {
  registration_number: "23",
  brand: "34",
  type: "234",
  image_front_view: "234",
  image_back_view: "234",
  image_side_view: "234",
  image_interior_view: "fd",
  color: "234",
  no_Of_Passengers: 0,
  transmission_type: "fd",
  fuel_Type: "fd",
  daily_Rate: 0,
  monthly_Rate: 0,
  free_Km_for_a_Day: 0,
  free_Km_for_a_month: 0,
  price_per_Extra_KM: 0,
  current_KM: 0,
  available: "sdsdfsdf",
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
  Transmission_type: Yup.string().required(),
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
  // function handleSub(e: any) {
  //   console.log("====================================");
  //   console.log(e.target.files[0]);
  //   console.log("====================================");
  //   initialValues.image_interior_view = e.target.files[0];
  // }

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
              <InputControl
                name="free_Km_for_a_Day"
                label="Free Km for a Day"
              />
              <InputControl
                name="free_Km_for_a_month"
                label="Free Km for a month"
              />
            </Box>
            <Box>
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
              <InputControl name="available" label="Iasdadmage Interior View" />
              <ButtonGroup>
                <SubmitButton>Submit</SubmitButton>
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

/*
var fileObject = $("#file")[0].files[0];//access file object from input field
var fileName = $("#file")[0].files[0].name; //get file name
var data = new FormData(); //setup form data object to send file data
data.append("file", fileObject, fileName); //append data
$.ajax({
    url: 'up',
    method: 'post',
    async: true,
    processData: false, //stop processing data of request body
    contentType: false, // stop setting content type by jQuery
    data: data,
    success: function () {
        alert("File Uploaded");
    }
});


*/
