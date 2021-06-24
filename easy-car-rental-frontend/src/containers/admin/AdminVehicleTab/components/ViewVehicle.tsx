import React,{useEffect,useState} from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { VehicleProp } from "../../../../interface/interface";
import axios from "axios";

const ViewVehicle = () => {

//  useState<Prop[]>([]!);

const [vehicle, setVehicle] = useState<VehicleProp[]>([]!);
  
 async function getData() {
    const res=await axios.get('http://localhost:8080/Easy_Car_Rental_Backend_war_exploded/api/v1/vehicle')
      setVehicle(res.data.data);
  }


useEffect(() => {
    getData();

  return () => {

  }
}, [])

  return (
    <div>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th color="whatsapp">registration_number</Th>
            <Th color="whatsapp">Brand</Th>
            <Th color="whatsapp">Type</Th>
            <Th color="whatsapp">Color</Th>
            <Th color="whatsapp">No Of Passengers</Th>
            <Th color="whatsapp">Available</Th>
          </Tr>
        </Thead>
        <Tbody>
          {vehicle.map((el,i)=>
               <Tr key={i}>
            <Td>{el.registration_number}</Td>
            <Td>{el.brand}</Td>
            <Td>{el.type}</Td>
            <Td>{el.color}</Td>
            <Td>{el.no_Of_Passengers}</Td>
            <Td>{el.available}</Td>
          </Tr>
            
          )}
     
          <Tr>
            <Td>CD-0011</Td>
            <Td>Toyota</Td>
            <Td>Luxury</Td>
            <Td>Green</Td>
            <Td>2</Td>
            <Td>Yes</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>registration_number</Th>
            <Th>Brand</Th>
            <Th>Type</Th>
            <Th>Color</Th>
            <Th>No Of Passengers</Th>
            <Th>Available</Th>
          </Tr>
        </Tfoot>
      </Table>
    </div>
  );
};

export default ViewVehicle;
