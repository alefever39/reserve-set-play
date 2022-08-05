import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  ButtonGroup,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar({ setLoginModalOpen, user, setUser }) {
  const [navigation, setNavigation] = useState(null);

  const notLoggedInNavigation = (
    <Breadcrumb separator="|">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/" fontSize="xl">
          Calendar
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
  const adminNavigation = (
    <Breadcrumb separator="|">
      <BreadcrumbItem>
        <BreadcrumbLink
          as={Link}
          to="/admin"
          fontSize="lg"
          fontWeight="semibold"
        >
          Calendar
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          as={Link}
          to="/admin/rec_centers"
          fontSize="lg"
          fontWeight="semibold"
        >
          Recreation Centers
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
  const playerNavigation = (
    <Breadcrumb separator="|" fontSize="lg">
      <BreadcrumbItem>
        <BreadcrumbLink
          as={Link}
          to="/home"
          fontSize="lg"
          fontWeight="semibold"
        >
          Calendar
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          as={Link}
          to="/home/my_reservations"
          fontSize="lg"
          fontWeight="semibold"
        >
          Reservations
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );

  useEffect(() => {
    if (user.user_type) {
      switch (user.user_type.user_type) {
        case "admin":
          setNavigation(adminNavigation);
          break;
        case "player":
          setNavigation(playerNavigation);
          break;
        default:
          setNavigation(notLoggedInNavigation);
      }
    } else {
      setNavigation(notLoggedInNavigation);
    }
  }, [user]);

  function handleLogin() {
    setLoginModalOpen(true);
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
      credentials: "include",
    }).then((res) => setUser({}));
  }

  return (
    <Flex
      as="header"
      minWidth="max-content"
      alignItems="center"
      gap="2"
      bg="teal.100"
      p="2"
      position="fixed"
      w="100%"
      borderBottomRadius="md"
      boxShadow="md"
    >
      <Box p="2">
        <Heading size="md">
          <Image
            boxSize="45px"
            src="/reserve_set_play_logo.png"
            alt="Reserve set play logo"
          />
        </Heading>
      </Box>
      {navigation}
      {/* <BreadcrumbItem>
        <BreadcrumbLink as={Link} to='/home/my_reservations'>
          Dashboard
        </BreadcrumbLink>
      </BreadcrumbItem> */}
      <Spacer />
      {user.id ? (
        <>
          <Text fontSize="lg" fontWeight="semibold" color="gray.800">
            Welcome, {user.first_name}!
          </Text>
          <Button colorScheme="red" onClick={handleLogout}>
            Log out
          </Button>
        </>
      ) : (
        <Button colorScheme="teal" onClick={handleLogin}>
          Log in
        </Button>
      )}
    </Flex>
  );
}

export default NavBar;
