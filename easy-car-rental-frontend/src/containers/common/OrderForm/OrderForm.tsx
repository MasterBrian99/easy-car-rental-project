import { Text, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'

const OrderForm = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
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
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder="Type here..." />
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
