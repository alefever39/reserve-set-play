import { Box } from "@chakra-ui/react";
function NewReservation({ handleNewReservation }) {
  return (
    <Box
      as="button"
      onClick={handleNewReservation}
      background="teal.300"
      borderRadius="2xl"
      px="30px"
      py="10px"
      fontWeight="semibold"
      _hover={{ background: "teal.200" }}
    >
      {" "}
      Reserve Space
    </Box>
  );
}

export default NewReservation;
