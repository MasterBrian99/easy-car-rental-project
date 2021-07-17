import {
  Box, FormControl, FormLabel, Input, FormErrorMessage, Button, Grid, Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Formik, Field, Form } from "formik";
import { VehicleProp } from '../../../../../interface/interface';

import {
  registration_number_Validate,
  brand_Validate, type_Validate,
  color_Validate,
  no_Of_Passengers_Validate,
  transmission_type_Validate,
  fuel_Type_Validate,
  daily_Rate_Validate,
  monthly_Rate_Validate,
  free_Km_for_a_Day_Validate,
  free_Km_for_a_month_Validate,
  price_per_Extra_KM_Validate,
  current_KM_Validate,
  available_Validate

} from './validate';
import axios from 'axios';
const AddVehicles2 = () => {

  const [image_front_view, setImage_front_view] = useState();
  const [image_back_view, setImage_back_view] = useState();
  const [image_side_view, setImage_side_view] = useState();
  const [image_interior_view, setImage_interior_view] = useState();
  const [showAlert, setShowAlert] = useState(false);
  function getImage_front_view(e: any) {
    // @ts-ignore
    setImage_front_view(e.target.files[0]);
  }

  function getImage_back_view(e: any) {
    // @ts-ignore
    setImage_back_view(e.target.files[0]);
  }


  function getImage_side_view(e: any) {
    // @ts-ignore
    setImage_side_view(e.target.files[0]);
  }


  function getImage_interior_view(e: any) {
    // @ts-ignore
    setImage_interior_view(e.target.files[0]);
  }

  async function sendData(data: any) {

    for (var value of data.values()) {
      console.log(value);
    }
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:8080/Easy_Car_Rental_Backend_war_exploded/api/v1/vehicle",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res.data.code == 201) {
        setShowAlert(true);
      }
      console.log(res.data);
    } catch (error) {
      // @ts-ignore 
      console.error(error.response.data);
    }
  }
  return (
    <Box>
      <Formik
        initialValues={{
          registration_number: '',
          brand: '',
          type: '',
          image_front_view: '',
          image_back_view: '',
          image_side_view: '',
          image_interior_view: '',
          color: '',
          no_Of_Passengers: 0,
          transmission_type: '',
          fuel_Type: '',
          daily_Rate: 0,
          monthly_Rate: 0,
          free_Km_for_a_Day: 0,
          free_Km_for_a_month: 0,
          price_per_Extra_KM: 0,
          current_KM: 0,
          available: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values)
          setTimeout(() => {

            let data = new FormData();
            data.append('registration_number', values.registration_number);
            data.append('brand', values.brand);
            data.append('type', values.type);
            // @ts-ignore
            data.append('image_front_view', image_front_view, image_front_view.name);
            // @ts-ignore
            data.append('image_back_view', image_back_view, image_back_view.name);
            // @ts-ignore
            data.append('image_side_view', image_side_view, image_side_view.name);
            // @ts-ignore
            data.append('image_interior_view', image_interior_view, image_interior_view.name);
            data.append('color', values.color);
            // @ts-ignore
            data.append('no_Of_Passengers', values.no_Of_Passengers);
            data.append('transmission_type', values.transmission_type);
            data.append('fuel_Type', values.fuel_Type);
            // @ts-ignore
            data.append('daily_Rate', values.daily_Rate);
            // @ts-ignore
            data.append('monthly_Rate', values.monthly_Rate);
            // @ts-ignore
            data.append('free_Km_for_a_Day', values.free_Km_for_a_Day);
            // @ts-ignore
            data.append('free_Km_for_a_month', values.free_Km_for_a_month);
            // @ts-ignore
            data.append('price_per_Extra_KM', values.price_per_Extra_KM);
            // @ts-ignore
            data.append('current_KM', values.current_KM);
            data.append('available', values.available);
            sendData(data);



            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <Box>
                <Field name="registration_number" validate={registration_number_Validate}>
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.registration_number && form.touched.registration_number}
                    >
                      <FormLabel htmlFor="registration_number" marginTop={'2'}>Registration Number</FormLabel>
                      <Input
                        {...field}
                        id="registration_number"
                        placeholder="Registration Number"
                        width="30rem"
                      />
                      <FormErrorMessage>
                        {form.errors.registration_number}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="brand" validate={brand_Validate} >
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.brand && form.touched.brand}
                    >
                      <FormLabel htmlFor="brand" marginTop={'2'}>Brand</FormLabel>
                      <Input
                        {...field}
                        id="brand"
                        placeholder="Brand"
                        width="30rem"
                      />
                      <FormErrorMessage>
                        {form.errors.brand}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="type" validate={type_Validate} >
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.type && form.touched.type}
                    >
                      <FormLabel htmlFor="type" marginTop={'2'}>Type</FormLabel>
                      <Input
                        {...field}
                        id="type"
                        placeholder="Type"
                        width="30rem"
                      />
                      <FormErrorMessage>
                        {form.errors.type}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="image_front_view">
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl>
                      <FormLabel htmlFor="image_front_view">Front Image</FormLabel>
                      <Input
                        id="image_front_view"
                        placeholder="Full Name"
                        width="30rem"
                        type="file"
                        onChange={(event) => {
                          getImage_front_view(event);
                        }}
                      />
                      <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="image_back_view">
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl>
                      <FormLabel htmlFor="image_back_view">Back Image</FormLabel>
                      <Input
                        id="image_back_view"
                        placeholder="Full Name"
                        width="30rem"
                        type="file"
                        onChange={(event) => {
                          getImage_back_view(event);
                        }}
                      />
                      <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="image_side_view">
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl>
                      <FormLabel htmlFor="image_side_view">Side Image</FormLabel>
                      <Input
                        id="image_side_view"
                        placeholder="Full Name"
                        width="30rem"
                        type="file"
                        onChange={(event) => {
                          getImage_side_view(event);
                        }}
                      />
                      <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="image_interior_view">
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl>
                      <FormLabel htmlFor="image_interior_view">Interior Image</FormLabel>
                      <Input
                        id="image_interior_view"
                        placeholder="Full Name"
                        width="30rem"
                        type="file"
                        onChange={(event) => {
                          getImage_interior_view(event);
                        }}
                      />
                      <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="color" validate={color_Validate} >
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.color && form.touched.color}
                    >
                      <FormLabel htmlFor="color" marginTop={'2'}>Color</FormLabel>
                      <Input
                        {...field}
                        id="color"
                        placeholder="Color"
                        width="30rem"
                      />
                      <FormErrorMessage>
                        {form.errors.color}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="no_Of_Passengers" validate={no_Of_Passengers_Validate} >
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.no_Of_Passengers && form.touched.no_Of_Passengers}
                    >
                      <FormLabel htmlFor="no_Of_Passengers" marginTop={'2'}>No Of Passengers(Enter Count)</FormLabel>
                      <Input
                        {...field}
                        id="no_Of_Passengers"
                        placeholder="no_Of_Passengers"
                        width="30rem"
                      />
                      <FormErrorMessage>
                        {form.errors.no_Of_Passengers}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Box>
              <Box>
                <Field name="transmission_type" validate={transmission_type_Validate} >
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.transmission_type && form.touched.transmission_type}
                    >
                      <FormLabel htmlFor="transmission_type" marginTop={'2'}>Transmission Type</FormLabel>
                      <Input
                        {...field}
                        id="transmission_type"
                        placeholder="Transmission Type"
                        width="30rem"
                      />
                      <FormErrorMessage>
                        {form.errors.transmission_type}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="fuel_Type" validate={fuel_Type_Validate} >
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.fuel_Type && form.touched.fuel_Type}
                    >
                      <FormLabel htmlFor="fuel_Type" marginTop={'2'}>Fuel Type</FormLabel>
                      <Input
                        {...field}
                        id="fuel_Type"
                        placeholder="Fuel Type"
                        width="30rem"
                      />
                      <FormErrorMessage>
                        {form.errors.fuel_Type}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="daily_Rate" validate={daily_Rate_Validate} >
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.daily_Rate && form.touched.daily_Rate}
                    >
                      <FormLabel htmlFor="daily_Rate" marginTop={'2'}>Daily Rate</FormLabel>
                      <Input
                        {...field}
                        id="daily_Rate"
                        placeholder="Daily Rate"
                        width="30rem"
                      />
                      <FormErrorMessage>
                        {form.errors.daily_Rate}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="monthly_Rate" validate={monthly_Rate_Validate} >
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.monthly_Rate && form.touched.monthly_Rate}
                    >
                      <FormLabel htmlFor="monthly_Rate" marginTop={'2'}>Monthly Rate</FormLabel>
                      <Input
                        {...field}
                        id="monthly_Rate"
                        placeholder="Monthly Rate"
                        width="30rem"
                      />
                      <FormErrorMessage>
                        {form.errors.monthly_Rate}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="free_Km_for_a_Day" validate={free_Km_for_a_Day_Validate} >
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.free_Km_for_a_Day && form.touched.free_Km_for_a_Day}
                    >
                      <FormLabel htmlFor="color" marginTop={'2'}>Free KM For a Day</FormLabel>
                      <Input
                        {...field}
                        id="free_Km_for_a_Day"
                        placeholder="Free KM For a Day"
                        width="30rem"
                      />
                      <FormErrorMessage>
                        {form.errors.free_Km_for_a_Day}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="free_Km_for_a_month" validate={free_Km_for_a_month_Validate} >
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.free_Km_for_a_month && form.touched.free_Km_for_a_month}
                    >
                      <FormLabel htmlFor="free_Km_for_a_month" marginTop={'2'}>Free KM For a Month</FormLabel>
                      <Input
                        {...field}
                        id="free_Km_for_a_month"
                        placeholder="Free KM For a Month"
                        width="30rem"
                      />
                      <FormErrorMessage>
                        {form.errors.free_Km_for_a_month}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="price_per_Extra_KM" validate={price_per_Extra_KM_Validate} >
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.price_per_Extra_KM && form.touched.price_per_Extra_KM}
                    >
                      <FormLabel htmlFor="price_per_Extra_KM" marginTop={'2'}>Price Per Extra KM</FormLabel>
                      <Input
                        {...field}
                        id="price_per_Extra_KM"
                        placeholder="Price Per Extra KM"
                        width="30rem"
                      />
                      <FormErrorMessage>
                        {form.errors.price_per_Extra_KM}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="current_KM" validate={current_KM_Validate} >
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.current_KM && form.touched.current_KM}
                    >
                      <FormLabel htmlFor="current_KM" marginTop={'2'}>Current KM</FormLabel>
                      <Input
                        {...field}
                        id="current_KM"
                        placeholder="Current KM"
                        width="30rem"
                      />
                      <FormErrorMessage>
                        {form.errors.current_KM}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="available" validate={available_Validate} >
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.available && form.touched.available}
                    >
                      <FormLabel htmlFor="available" marginTop={'2'}>Available</FormLabel>
                      <Input
                        {...field}
                        id="available"
                        placeholder="Available"
                        width="30rem"
                      />
                      <FormErrorMessage>
                        {form.errors.available}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

              </Box>
            </Grid>

            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      {showAlert ? <Alert status="success" mt={"2rem"}>
        <AlertIcon />
        <AlertTitle mr={2} color="black">Vehicle Added</AlertTitle>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert> : <></>}
    </Box>
  )
}

export default AddVehicles2
