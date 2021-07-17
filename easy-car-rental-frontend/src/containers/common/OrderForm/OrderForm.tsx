import {
    Text, Box, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription, DrawerFooter, useDisclosure, FormControl, FormLabel, FormErrorMessage, CloseButton
} from '@chakra-ui/react'
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
    const [bookingId, setBookingId] = useState(uniqid.time())
    const [mainImage, setMainImage] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    function getDifferenceInDays(date1: any, date2: any) {
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / (1000 * 60 * 60 * 24);
    }

    function getImage(e: any) {
        // @ts-ignore
        console.log(e.target.files[0]);
        setMainImage(e.target.files[0]);
    }

    async function sendData(data: any) {
        try {
            const res = await axios({
                method: "POST",
                url: "http://localhost:8080/Easy_Car_Rental_Backend_war_exploded/api/v1/booking",
                data: data,
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(res.data.data);
        } catch (error) {
            // @ts-ignore 
            console.error(error.response.data);
        }
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
                                bookingId: 'adadad',
                                userRegister: userR,
                                carNumber: carNumber,
                                dateTime: value[0].getFullYear() + "/" + (value[0].getMonth() + 1) + "/" + value[0].getDate(),
                                duration: Math.round(getDifferenceInDays(value[0], value[1])).toString(),
                                bankSlip: ''
                            }}
                            onSubmit={(values, actions) => {
                                setTimeout(async () => {
                                    // alert(JSON.stringify(values, null, 2));
                                    setShowAlert(true);
                                    let data = new FormData();
                                    data.append("bookingId", values.bookingId);
                                    data.append("userRegister", values.userRegister);
                                    data.append("carNumber", values.carNumber);
                                    data.append("dateTime", values.dateTime);
                                    data.append("duration", values.duration);
                                    // @ts-ignore
                                    data.append("bankSlip", mainImage, mainImage.name);
                                    console.log(data);
                                    sendData(data);
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
                                                    onChange={(event) => {
                                                        getImage(event);
                                                    }}
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
                    {showAlert ? <Alert status="success">
                        <AlertIcon />
                        <AlertTitle mr={2}>Your order Added !</AlertTitle>
                        <CloseButton position="absolute" right="8px" top="8px" />
                    </Alert> : <></>}

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
