import React, { useContext } from "react";
import { Flex, Heading, Spacer, Box, Container } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { ImUserPlus } from "react-icons/im";
import styles from "./style.module.scss";
import { BiLogIn } from "react-icons/bi";
import { UserContext } from "../../../context/UserContext";

const Navbar = () => {

  // @ts-ignore
  const [user, setUser] = useContext(UserContext);
  console.log(user);
  
  const history = useHistory();
  return (
    <div className={styles.main}>
      <Container maxW="container.xl">
        <Flex align="center">
          <Box p="2">
            <Link to="/">
              <Heading size="md" fontSize="2rem" fontWeight="bold">
                Car Rental
              </Heading>
            </Link>
          </Box>
          <Spacer />
          <Box>
            <ul className={styles.listItem}>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/browse">
                <li>Browse</li>
              </Link>
              <Link to="/">
                <li>Lamo</li>
              </Link>
              <Link to="/">
                <li>Lamo</li>
              </Link>
            </ul>
          </Box>
          <Spacer />
          <Box>
            {user.role === "guest" ? (
              <>
                <Button
                  colorScheme="blue"
                  leftIcon={<BiLogIn />}
                  mr={"1rem"}
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  Login
                </Button>
                <Button
                  colorScheme="blue"
                  leftIcon={<ImUserPlus />}
                  onClick={() => {
                    history.push("/register");
                  }}
                >
                  Register
                </Button>
              </>
            ) : user.role ==="user" ?  (
              <Button
                colorScheme="blue"
                leftIcon={<ImUserPlus />}
                onClick={() => {
                  history.push("/profile");
                }}
              >
                Profile
              </Button>
            ) :  user.role ==="driver" ?(
                  <Button
                colorScheme="blue"
                leftIcon={<ImUserPlus />}
                onClick={() => {
                  history.push("/driver_profile");
                }}
              >
                Profile
              </Button>
            ) :<>
            
            </>}

            {/* <SignInForm /> */}
          </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;
