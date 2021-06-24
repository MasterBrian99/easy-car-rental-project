import React from "react";
import { LinkBox, Box, Heading, Text, Image,Tag } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

interface Prop{
  registration_number:string;
  brand:string;
  type:string;
  color:string;
  available:string;
  image_front_view:string;
}

const VehicleCard = ({registration_number,brand,type,color,available,image_front_view}:Prop) => {
  const history = useHistory();


function setImageURL(value:string){
  // @ts-ignore
value = value.split("C:\\Users\\brian\\Desktop\\work\\easy-car-rental-private-limited\\Easy-Car-Rental-Backend\\target\\Easy-Car-Rental-Backend-1.0.000\\uploads/").pop().trim();
  return 'http://127.0.0.1:8081/'+value;
  
}

  return (
    <LinkBox
      backgroundColor="blue.900"
      as="article"
      maxW="sm"
      rounded="md"
      m={2}
      onClick={() => {
        history.push(`/vehicle/${registration_number}`);
      }}
      cursor="pointer"
    >
      <Box>
        <Image
          rounded="md"
          roundedBottomLeft={0}
          roundedBottomRight={0}
          src={setImageURL(image_front_view)}
          alt="Segun Adebayo"
          objectFit="cover"
          width="100%"
        />
      </Box>
      <Box padding={3}>
        <Text size="sm" color="blue.400" >
          Registration Number : {registration_number}
        </Text>
        <Heading size="sm" my="1">
        Brand : {brand}
        </Heading>
        <Heading size="sm" my="1">
         Type : {type}
        </Heading>   
             <Heading size="sm" my="1">
          Color : {color}
        </Heading>       
       
      </Box>
      <Box  display="flex" alignItems="center" flexDir="column" mb="5">
        {available =='yes' ?    <Tag mt={"7"} variant="subtle" colorScheme="cyan" fontSize="1rem">
            This Vehicle is Available 
          </Tag> :   <Tag mt={"7"} variant="subtle" colorScheme="red" fontSize="1rem">
            This Vehicle is Not Available 
          </Tag>}
  
      </Box>
    </LinkBox>
  );
};

export default VehicleCard;
