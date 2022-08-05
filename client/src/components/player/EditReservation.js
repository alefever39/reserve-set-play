import { useHistory } from "react-router-dom";
import { Box, VStack } from "@chakra-ui/react";
function EditReservation({
  handleUpdate,
  setDisplayReservation,
  handleDelete,
}) {
  const history = useHistory();

  function handleReRoute() {
    setDisplayReservation("");
    history.push("/home/my_reservations");
  }

  return (
    <VStack spacing="25px">
      <Box
        as="button"
        onClick={handleUpdate}
        background="teal.300"
        borderRadius="2xl"
        width="240px"
        px="30px"
        py="10px"
        fontWeight="semibold"
        _hover={{ background: "teal.200" }}
      >
        {" "}
        Update Reservation
      </Box>
      <Box
        as="button"
        onClick={handleDelete}
        background="teal.300"
        borderRadius="2xl"
        width="240px"
        px="30px"
        py="10px"
        fontWeight="semibold"
        _hover={{ background: "teal.200" }}
      >
        {" "}
        Cancel Reservation
      </Box>
      <Box
        as="button"
        onClick={handleReRoute}
        background="teal.300"
        borderRadius="2xl"
        width="240px"
        px="5px"
        py="10px"
        fontWeight="semibold"
        _hover={{ background: "teal.200" }}
      >
        {" "}
        Go Back to My Reservations
      </Box>
    </VStack>
  );
}

export default EditReservation;
