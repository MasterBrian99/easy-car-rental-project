import React, { Component } from "react";
import { Box, Heading } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { UnorderedList, ListItem, Text } from "@chakra-ui/react";
import { RiDashboardLine, RiUserVoiceLine } from "react-icons/ri";
import { AiFillCar, AiOutlineUserSwitch } from "react-icons/ai";
import { RiUserSettingsFill } from 'react-icons/ri'
class Sidebar extends Component {
  render() {
    return (
      <Box
        mt={"2rem"}
        ml={"1rem"}
        width={"8rem"}
        height={"93vh"}
        position={"fixed"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        className={"componentBlurBackground"}
      >
        <Box p="2" mt={7}>
          <Heading
            size="md"
            fontSize="1.4rem"
            fontWeight="bold"
            textAlign={"center"}
          >
            Car Rental
          </Heading>

          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <UnorderedList listStyleType="none" mr={"1rem"} mt={"3rem"}>
              <Link to="/admin/dashboard">
                <ListItem padding="1rem 0">
                  <RiDashboardLine size="3rem" />
                </ListItem>
              </Link>
              <Link to="/admin/vehicle">
                <ListItem>
                  <AiFillCar size="3rem" />
                </ListItem>
              </Link>
              <Link to="/admin/pending_users">
                <ListItem padding="1rem 0">
                  <RiUserVoiceLine size="3rem" />
                </ListItem>
              </Link>
              <Link to="/admin/all_users">
                <ListItem padding="1rem 0">
                  <AiOutlineUserSwitch size="3rem" />
                </ListItem>
              </Link>
              <Link to="/admin/driver">
                <ListItem padding="1rem 0">
                  <RiUserSettingsFill size="3rem" />
                </ListItem>
              </Link>
            </UnorderedList>
          </Box>
        </Box>
        <Link to="/">
          <Text>Hello</Text>
        </Link>
      </Box>
    );
  }
}

export default Sidebar;
