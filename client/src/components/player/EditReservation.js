import { useHistory } from "react-router-dom";
import { Box } from "@chakra-ui/react";
function EditReservation({ handleUpdate, setDisplayReservation, handleDelete }) {
  const history = useHistory();

  function handleReRoute() {
    setDisplayReservation("");
    history.push("/home/my_reservations");
  }

  return (
    <>
      <Box
        as="button"
        onClick={handleUpdate}
        background="teal.300"
        borderRadius="2xl"
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
        px="30px"
        py="10px"
        fontWeight="semibold"
        _hover={{ background: "teal.200" }}
      >
        {" "}
        Go Back to My Reservations
      </Box>
    </>
  );
}

export default EditReservation;
