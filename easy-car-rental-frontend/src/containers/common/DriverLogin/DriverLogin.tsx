import { Alert, AlertIcon, AlertTitle, Box, Button, CloseButton, Container,FormControl,FormErrorMessage,FormLabel,Input,Text } from '@chakra-ui/react';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React,{useContext,useState} from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';

const DriverLogin = () => {

    // @ts-ignore 
  const [user, setUser] = useContext(UserContext);
  const [showUserNameAlert, setShowUserNameAlert] = useState(false);
  const [showPasswordAlert, setShowPasswordAlert] = useState(false);
  const [showProfileAlert, setShowProfileAlert] = useState(false);
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
              initialValues={{ name: "", pass: "" }}
              onSubmit={(values, actions) => {
                setTimeout(async () => {
                  // alert(JSON.stringify(values, null, 2));
                  const res = await axios.get(
                    `http://localhost:8080/Easy_Car_Rental_Backend_war_exploded/api/v1/driver/${values.name}`
                  );
                  // console.log(res);
                  if (res.data.data == null) {
                    // console.log(user);

                    setShowUserNameAlert(true);
                  } else {
                    if (res.data.data.password === values.pass) {
                      // console.log(user);
                      setUser(res.data.data);
                      // console.log("gg");
                      setShowProfileAlert(true);
                    } else {
                      setShowPasswordAlert(true);
                    }
                  }
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
                        <FormLabel htmlFor="name">User name</FormLabel>
                        <Input
                          {...field}
                          id="name"
                          placeholder="User Name"
                          width="30rem"
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="pass" validate={validatePassword}>
                    {/* @ts-ignore */}
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.pass && form.touched.pass}
                      >
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                          type="password"
                          {...field}
                          id="pass"
                          placeholder="password"
                          width="30rem"
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
            {showUserNameAlert ? (
              <Alert status="error" mt={2} backgroundColor="red">
                <AlertIcon color="white" />
                <AlertTitle>username incorrect. please try again</AlertTitle>

                <CloseButton
                  position="absolute"
                  right="8px"
                  top="8px"
                  onClick={() => {
                    setShowUserNameAlert(false);
                  }}
                />
              </Alert>
            ) : (
              <></>
            )}
            {showPasswordAlert ? (
              <Alert status="error" mt={2} backgroundColor="red">
                <AlertIcon color="white" />
                <AlertTitle>password incorrect. please try again</AlertTitle>

                <CloseButton
                  position="absolute"
                  right="8px"
                  top="8px"
                  onClick={() => {
                    setShowPasswordAlert(false);
                  }}
                />
              </Alert>
            ) : (
              <></>
            )}
            {showProfileAlert ? (
              <Link to="/driver_profile">
                <Alert status="success" mt={2} backgroundColor="green">
                  <AlertIcon color="white" />
                  <AlertTitle>login successful</AlertTitle>
                  <AlertTitle>Click Here to visit your profile</AlertTitle>

                  <CloseButton
                    position="absolute"
                    right="8px"
                    top="8px"
                    onClick={() => {
                      setShowPasswordAlert(false);
                    }}
                  />
                </Alert>
              </Link>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
    )
}

export default DriverLogin
