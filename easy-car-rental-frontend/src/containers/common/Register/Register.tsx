import React from "react";
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
  // username: "",
  //             fullName: "",
  //             role: "",
  //             image: "",
  //             address: "",
  //             password: "",

  // @ts-ignore
  // const rebuildData = (data) => {
  //   let formData = new FormData();
  //   formData.append("username", data.username);
  //   formData.append("fullName", data.fullName);
  //   formData.append("role", data.role);
  //   formData.append("image", data.image);
  //   formData.append("address", data.address);
  //   formData.append("password", data.password);
  //   var object = {};
  //   // @ts-ignore
  //   formData.forEach((value, key) => (object[key] = value));
  //   var json = JSON.stringify(object);
  //   console.log("====================================");
  //   console.log(json);
  //   console.log("====================================");
  //   return json;
  // };

  // const   handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!e.target.files) {
  //     return;
  //   }
  //   let file = e.target.files[0];
  //   this.setState({ file: file });

  //   let data = new FormData();
  //   data.append('file', file);

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
              password: "",
            }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                // const data = rebuildData(values);
                axios({
                  method: "POST",
                  url: "http://localhost:8080/Easy_Car_Rental_Backend_war_exploded/api/v1/customer",
                  data: {
                    username: values.username,
                    fullName: values.fullName,
                    role: values.role,
                    image: values.image,
                    address: values.address,
                    password: values.password,
                  },

                  headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                  },
                }).then(function (response) {
                  if (response.status === 201) {
                  }
                  console.log(response.status);
                });

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
                <Field name="image" validate={validateImage}>
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.image && form.touched.image}
                    >
                      <FormLabel htmlFor="image">Nic Image</FormLabel>
                      <Input
                        {...field}
                        id="image"
                        placeholder="Full Name"
                        width="30rem"
                        type="file"
                        // onChange={(event) => {
                        //   props.setFieldValue(
                        //     "image",
                        //     // @ts-ignore
                        //     event.currentTarget.files[0]
                        //   );
                        // }}
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
                <Field name="password" validate={validatePassword}>
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                    >
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        {...field}
                        id="password"
                        placeholder="Password"
                        width="30rem"
                        type="password"
                      />
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
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
