import React, { useState } from "react";
import {
  Box,
  Container,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import {
  validateUserName,
  validateFullName,
  validateImage,
  validateAddress,
  validatePassword,
} from "./validate";
import axios from "axios";
const Register = () => {
  const [mainImage, setMainImage] = useState(null);

  function getImage(e: any) {
    // @ts-ignore
    console.log(e.target.files[0]);
    setMainImage(e.target.files[0]);
  }
  async function sendData(data: any) {
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:8080/Easy_Car_Rental_Backend_war_exploded/api/v1/customer",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res);
    } catch (error) {
      console.error(error.response.data);
    }
  }
  // function rebuildData(values: any) {
  //   let data = new FormData();
  //   data.append("username", values.username);
  //   data.append("fullName", values.fullName);
  //   data.append("role", values.role);
  //   // @ts-ignore
  //   data.append("image", mainImage, mainImage.name);
  //   data.append("address", values.address);
  //   data.append("pass", values.pass);
  //   data.append("approved", values.approved);
  //   console.log(data);

  //   return data;
  // }
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
        <Box
          className="componentBlurBackground"
          w={"40rem"}
          minHeight={"40rem"}
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Text fontSize="5xl" fontWeight="bold" mt={"3rem"}>
            Create Account
          </Text>
          <Text fontSize="1xl" fontWeight="bold">
            Already have an account ?{" "}
            <Link to="/login" style={{ color: "blue" }}>
              Login
            </Link>
          </Text>
          <Formik
            initialValues={{
              username: "",
              fullName: "",
              role: "",
              image: "",
              address: "",
              pass: "",
              approved: "pending",
            }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                let data = new FormData();
                data.append("username", values.username);
                data.append("fullName", values.fullName);
                data.append("role", values.role);
                // @ts-ignore
                data.append("image", mainImage, mainImage.name);
                data.append("address", values.address);
                data.append("pass", values.pass);
                data.append("approved", values.approved);
                console.log(data);
                // @ts-ignore
                for (var value of data.values()) {
                  console.log(value);
                }
                sendData(data);
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props) => (
              <Form>
                <Field name="username" validate={validateUserName}>
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.username && form.touched.username}
                    >
                      <FormLabel htmlFor="username">User Name</FormLabel>
                      <Input {...field} id="username" placeholder="Username" />
                      <FormErrorMessage>
                        {form.errors.username}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="fullName" validate={validateFullName}>
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.fullName && form.touched.fullName}
                    >
                      <FormLabel htmlFor="fullName">Full Name</FormLabel>
                      <Input
                        {...field}
                        id="fullName"
                        placeholder="Full Name"
                        width="30rem"
                      />
                      <FormErrorMessage>
                        {form.errors.fullName}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="image">
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl>
                      <FormLabel htmlFor="image">Nic Image</FormLabel>
                      <Input
                        id="image"
                        placeholder="Full Name"
                        width="30rem"
                        type="file"
                        onChange={(event) => {
                          getImage(event);
                        }}
                      />
                      <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="address" validate={validateAddress}>
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.address && form.touched.address}
                    >
                      <FormLabel htmlFor="address">Address</FormLabel>
                      <Input
                        {...field}
                        id="address"
                        placeholder="Address"
                        width="30rem"
                      />
                      <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="pass" validate={validatePassword}>
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.pass && form.touched.pass}
                    >
                      <FormLabel htmlFor="pass">Password</FormLabel>
                      <Input
                        {...field}
                        id="pass"
                        placeholder="pass"
                        width="30rem"
                        type="pass"
                      />
                      <FormErrorMessage>{form.errors.pass}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  width="100%"
                  mt={4}
                  colorScheme="blue"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
