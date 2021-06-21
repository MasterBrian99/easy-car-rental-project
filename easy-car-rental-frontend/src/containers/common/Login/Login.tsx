import React from "react";
import {
  Box,
  Container,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";

const Login = () => {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  function validateName(value: string) {
    let error;
    if (!value) {
      error = "Username is required";
    }
    return error;
  }

  function validatePassword(value: string) {
    let error;
    if (!value) {
      error = "Password is required";
    }
    return error;
  }

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
            Sign in Now
          </Text>
          <Text fontSize="1xl" fontWeight="bold">
            New to Easy Car Rental ?{" "}
            <Link to="/register" style={{ color: "blue" }}>
              Register
            </Link>
          </Text>
          {/*  */}
          <Box mt="3rem">
            <Formik
              initialValues={{ name: "Sasuke", password: "" }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {(props) => (
                <Form>
                  <Field name="name" validate={validateName}>
                    {/* @ts-ignore */}
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel htmlFor="name">First name</FormLabel>
                        <Input
                          {...field}
                          id="name"
                          placeholder="name"
                          width="30rem"
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="password" validate={validatePassword}>
                    {/* @ts-ignore */}
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                          type="password"
                          {...field}
                          id="password"
                          placeholder="password"
                          width="30rem"
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
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
