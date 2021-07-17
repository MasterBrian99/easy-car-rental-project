import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const UserTable = () => {
  return (
    <Box width="100%" padding="0 0.5rem">
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Vehicle ID</Th>
            <Th>into</Th>
            <Th isNumeric>Price</Th>
          </Tr>
        </Thead>
        <Tbody>

        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  );
};

export default UserTable;
