import React from "react";
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
const ViewVehicle = () => {
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
          <Tr>
            <Td>CD-0011</Td>
            <Td>Toyota</Td>
            <Td>Luxury</Td>
            <Td>Green</Td>
            <Td>2</Td>
            <Td>Yes</Td>
          </Tr>
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
