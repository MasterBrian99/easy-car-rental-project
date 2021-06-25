import { Text, Box, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, useDisclosure, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'
import React, { useRef, useState, useEffect } from 'react'
import uniqid from 'uniqid';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';


interface Booking {
    bookingId: string;
    userRegister: string;
    carNumber: string;
    dateTime: string;
    duration: string;
    bankSlip: string;
}
interface Prop {
    userRegister: string;
    carNumber: string;

}

const OrderForm = ({ userRegister, carNumber }: Prop) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, onChange] = useState([new Date(), new Date()]);
    const btnRef = React.useRef()
    const [userR, setUserR] = useState(userRegister)
    function getDifferenceInDays(date1: any, date2: any) {
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / (1000 * 60 * 60 * 24);
    }


    useEffect(() => {
        console.log(Math.round(getDifferenceInDays(value[0], value[1])));

        return () => {

        }
    }, [value])

    return (
        <>
            {console.log(value[0].getFullYear() + "/" + (value[0].getMonth() + 1) + "/" + value[0].getDate())}
            {/* @ts-ignore */}
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>

                Open Order Form
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                //  @ts-ignore 
                finalFocusRef={btnRef}
                size="lg"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Book a Vehicle</DrawerHeader>

                    <DrawerBody>
                        <Formik
                            initialValues={{
                                bookingId: uniqid.time(),
                                userRegister: userR,
                                carNumber: carNumber,
                                dateTime: value[0].getFullYear() + "/" + (value[0].getMonth() + 1) + "/" + value[0].getDate(),
                                duration: Math.round(getDifferenceInDays(value[0], value[1])),
                                bankSlip: ''
                            }}
                            onSubmit={(values, actions) => {
                                setTimeout(async () => {
                                    alert(JSON.stringify(values, null, 2));
                                    console.log('====================================');
                                    console.log(values);
                                    console.log('====================================');
                                    actions.setSubmitting(false);
                                }, 1000);
                            }}
                        >
                            {(props) => (
                                <Form>

                                    <Field name="bankSlip">
                                        {/* @ts-ignore */}
                                        {({ field, form }) => (
                                            <FormControl>
                                                <FormLabel htmlFor="bankSlip">Bank Slip</FormLabel>
                                                <Input
                                                    id="bankSlip"
                                                    placeholder="Bank Slip"
                                                    type="file"
                                                />
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Box display="flex" width="100%" justifyContent="center" mt={"2"}>
                                        <DateRangePicker
                                            onChange={onChange}
                                            value={value}
                                        />
                                    </Box>
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

                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue">Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default OrderForm
