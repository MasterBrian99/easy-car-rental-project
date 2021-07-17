import React, { useContext } from "react";
import { Box } from "@chakra-ui/layout";
import { UserContext } from "../../../context/UserContext";
import ProfileImg from "../../../assets/images/instagram-profile-icon-transparent-png-svg-vector-profile-icon-transparent-512_512.png";
import { Image, Text, Button, Tag, Badge } from "@chakra-ui/react";
import UserTable from "../UserTable/UserTable";

const Profile = () => {
  // @ts-ignore
  const [user, setUser] = useContext(UserContext);
  return (
    <Box className={`mainBackgrounds`}>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        ml="2rem"
        pt={"5rem"}
      >
        <Box
          className="componentBlurBackground"
          w={"20rem"}
          minHeight={"30rem"}
          display="flex"
          alignItems="center"
          flexDirection="column"
          m={"2rem"}
        >
          <Tag mt={"7"} variant="subtle" colorScheme="cyan" fontSize="1rem">
            User
          </Tag>
          <Image
            mt={"1rem"}
            borderRadius="full"
            boxSize="150px"
            src={ProfileImg}
            alt="Profile"
          />
          <Text fontSize="lg" fontWeight="bold">
            {user.username}
          </Text>
          <Text fontSize="lg" color="aliceblue">
            {user.fullName}
          </Text>
          <Text fontSize="md" padding="0 1rem" textAlign="center">
          </Text>
          <Box display="flex" mt={"1rem"}>
            <Button colorScheme="blue" size="sm" mr={"1"}>
              Edit Account
            </Button>
            <Button colorScheme="blue" size="sm" ml={"1"}>
              Delete Account
            </Button>
          </Box>
          {user.approved == "pending" ? <Badge colorScheme="red" mt={"5"}>
            Account is not activated
          </Badge> : <Badge colorScheme="cyan" mt={"5"}>
            Account is activated
          </Badge>}

        </Box>
        <Box
          className="componentBlurBackground"
          w={"65%"}
          minHeight={"30rem"}
          display="flex"
          alignItems="center"
          flexDirection="column"
          m={"2rem"}
        >
          <UserTable />
        </Box>
      </Box>
      {console.log(user)}
      <h1>Profile</h1>
    </Box>
  );
};

export default Profile;
