import React from 'react';
import { Box, Text } from "@chakra-ui/layout";
import { FaUsers } from "react-icons/fa";

interface Prop {
    name: string,
    count: number
}

const InfoCard = ({ name, count }: Prop) => {
    return (
        <Box className={'componentBlurBackground'} display={'flex'} flexDirection={'column'} width={'18rem'} height={'18rem'} backgroundColor={'rgba( 24, 34, 39, 0.35 )'} margin={'1rem 0.5rem'} >
            <Box margin={'1rem 2rem'}>
                <FaUsers size={'3rem'} />
            </Box>
            <Text fontSize={'1.6rem'} fontWeight={'700'} margin={'0 2rem'} textAlign={'center'}>{name}</Text>
            <Text fontSize={'1.9rem'} margin={'auto'}>{count}</Text>
        </Box>
    );
};

export default InfoCard;

//h1,h2,h3
