import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
} from "@chakra-ui/react";
import axios from "axios";

interface Prop {
  username: string;
  fullName: string;
  role: string;
  image: string;
  address: string;
  pass: string;
  approved: string;
}

const AdminPendingUsers = () => {
  const [pendingUsers, setPendingUsers] = useState<Prop[]>([]!);

  async function getPendingUsers() {
    const res = await axios.get(
      "http://localhost:8080/Easy_Car_Rental_Backend_war_exploded/api/v1/customer/approval/pending"
    );

    setPendingUsers(res.data.data);
  }

  async function updateUsers(el: Prop) {
    axios({
      method: "POST",
      url: "http://localhost:8080/Easy_Car_Rental_Backend_war_exploded/api/v1/customer",
      data: {
        username: el.username,
        fullName: el.fullName,
        role: el.role,
        image: el.image,
        address: el.address,
        pass: el.pass,
        approved: "approved",
      },
    }).then(function (response) {
      if (response.status === 201) {
      }
      getPendingUsers();
    });
  }

  useEffect(() => {
    getPendingUsers();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      display={"flex"}
      ml={"11rem"}
      mr={"2rem"}
      flexWrap={"wrap"}
      mt={"2rem"}
      className="componentBlurBackground"
      minHeight="93vh"
      height="100%"
      width="100%"
    >
      <Box width="100%">
        <Table variant="simple" size="sm" width="100%" marginTop="1rem">
          {/* <TableCaption placement="top" fontSize="1.4rem" color="white">
            Pending Users
          </TableCaption> */}
          <Thead>
            <Tr>
              <Th fontSize="1rem" color="white">
                UserName
              </Th>
              <Th fontSize="1rem" color="white">
                Full Name
              </Th>
              <Th color="white" fontSize="1rem">
                Address
              </Th>
              <Th color="white" fontSize="1rem">
                NIC Image
              </Th>
              <Th color="white" fontSize="1rem">
                Approval
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* @ts-ignore */}
            {pendingUsers.map((el, i) => (
              <Tr key={i}>
                <Td>{el.username}</Td>
                <Td>{el.fullName}</Td>
                <Td>{el.address}</Td>
                <Td>{el.image}</Td>
                <Td>
                  <Popover>
                    <PopoverTrigger>
                      <Button colorScheme="blue">Approval</Button>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Confirmation!</PopoverHeader>
                        <PopoverBody>
                          Are you sure you want approve this user?
                        </PopoverBody>
                        <PopoverCloseButton />
                        <PopoverBody>
                          <Button
                            colorScheme="blue"
                            onClick={() => {
                              updateUsers({
                                username: el.username,
                                fullName: el.fullName,
                                role: el.role,
                                image: el.image,
                                address: el.address,
                                pass: el.pass,
                                approved: el.approved,
                              });
                            }}
                          >
                            Approved
                          </Button>
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default AdminPendingUsers;
