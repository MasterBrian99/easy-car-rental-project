import React, {Component} from 'react';
import {Box, Heading} from "@chakra-ui/layout";

class Sidebar extends Component {
    render() {
        return (
            <Box mt={'2rem'} ml={'1rem'} width={'8rem'} height={'93vh'}  position={'fixed'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'} className={'componentBlurBackground'}>
                <Box p="2" mt={7}>
                    <Heading size="md" fontSize="1.4rem" fontWeight="bold" textAlign={'center'}>
                        Car Rental
                    </Heading>

                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
                        <h1>Hello</h1>
                    </Box>
                </Box>

                <h1>Hello</h1>
            </Box>
        );
    }
}

export default Sidebar;