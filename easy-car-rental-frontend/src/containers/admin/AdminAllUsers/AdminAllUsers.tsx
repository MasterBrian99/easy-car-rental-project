import React,{useState,useEffect} from 'react'
import { Box,Table,Tr,Th,Thead,Tbody,Td } from '@chakra-ui/react'
import axios from 'axios';







interface Prop {
  username: string;
  fullName: string;
  role: string;
  image: string;
  address: string;
  pass: string;
  approved: string;
}
const AdminAllUsers = () => {

    const [approvedUsers, setApprovedUsers] = useState<Prop[]>([]!);

  async function getPendingUsers() {
    const res = await axios.get(
      "http://localhost:8080/Easy_Car_Rental_Backend_war_exploded/api/v1/customer/approval/approved"
    );

    setApprovedUsers(res.data.data);
  }

    useEffect(() => {
        getPendingUsers();
        return () => {
            
        }
    }, [])


    return (
        <Box   display={"flex"}
      ml={"11rem"}
      mr={"2rem"}
      flexWrap={"wrap"}
      mt={"2rem"}
      className="componentBlurBackground"
      minHeight="93vh"
      height="100%"
      width="100%">
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
                Role
              </Th>
            </Tr>
          </Thead>
          <Tbody>
              {approvedUsers.map((el,i)=>
              
                <Tr key={i}>
                <Td>{el.username}</Td>
                <Td>{el.fullName}</Td>
                <Td>{el.address}</Td>
                <Td>{el.role}</Td>
            </Tr>
              
              )}
          
          </Tbody>
        </Table>
      </Box>

        </Box>
    )
}

export default AdminAllUsers
