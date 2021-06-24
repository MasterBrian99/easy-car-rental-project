import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React from 'react'

const AdminDrivers = () => {

    return (
        <Box  display={"flex"}
      ml={"11rem"}
      mr={"2rem"}
      flexWrap={"wrap"}
      justifyContent="center"
      mt={"2rem"}
      className="componentBlurBackground"
      minHeight="93vh"
      height="100%"
      width="100%" >
          <Box width="40rem">
                    <Formik
            initialValues={{
              username: "",
              fullName: "",
              email: "",
              address: "",
              password: "",
            }}
            onSubmit={(values, actions) => {
              
              setTimeout(async() => {
                    try {
            const res=await axios({
        method: "POST",
        url: "http://localhost:8080/Easy_Car_Rental_Backend_war_exploded/api/v1/driver",
        data: {
          username:values.username,
          fullName:values.fullName,
          email:values.email,
          address:values.address,
          password:values.password,
          role:"driver",
        },
        });
         console.log(res);
    } catch (error) {
        console.error(error);
    }              
                
                actions.setSubmitting(false);
            }, 1000);
            }}
            >
            {(props: { isSubmitting: any; }) => (
                <Form >
                <Field name="username" >
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
                                <Field name="fullName" >
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                      <FormControl 
                      isInvalid={form.errors.fullName && form.touched.fullName}
                      >
                      <FormLabel htmlFor="fullName">Full Name</FormLabel>
                      <Input {...field} id="fullName" placeholder="Full Name" />
                      <FormErrorMessage>
                        {form.errors.fullName}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                                <Field name="email" >
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                      <FormControl 
                      isInvalid={form.errors.email && form.touched.email}
                      >
                      <FormLabel htmlFor="email">E mail</FormLabel>
                      <Input {...field} id="email" placeholder="Email" type="email" />
                      <FormErrorMessage>
                        {form.errors.email}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                                <Field name="address" >
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                      <FormControl 
                      isInvalid={form.errors.address && form.touched.address}
                      >
                      <FormLabel htmlFor="address">Address</FormLabel>
                      <Input {...field} id="address" placeholder="Address" />
                      <FormErrorMessage>
                        {form.errors.address}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                                <Field name="password" >
                  {/* @ts-ignore */}
                  {({ field, form }) => (
                      <FormControl 
                      isInvalid={form.errors.password && form.touched.password}
                      >
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input {...field} id="password" placeholder="Password" type="password"/>
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
    )
}

export default AdminDrivers
