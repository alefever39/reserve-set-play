import { Box } from "@chakra-ui/react";
function NewReservation({ handleNewReservation }) {
  return (
    <Box
      as="button"
      onClick={handleNewReservation}
      border="2px"
      borderRadius="md"
      p="4px"
    >
      {" "}
      Reserve Space
    </Box>
  );
}

export default NewReservation;
