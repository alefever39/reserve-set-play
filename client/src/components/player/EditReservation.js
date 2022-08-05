import { Box } from "@chakra-ui/react";
function EditReservation({ handleUpdate }) {
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
        // onClick={handleNewReservation}
        background="teal.300"
        borderRadius="2xl"
        px="30px"
        py="10px"
        fontWeight="semibold"
        _hover={{ background: "teal.200" }}
      >
        {" "}
        Delete Reservation
      </Box>
      <Box
        as="button"
        // onClick={handleNewReservation}
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
