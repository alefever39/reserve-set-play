import { Box } from "@chakra-ui/react";

function ReservationForm({ displayReservation }) {
  console.log(displayReservation);
  return (
    <Box
      border="2px"
      borderColor="gray.200"
      borderRadius="md"
      boxShadow="md"
      py="15px"
      my="20px"
    >
      <Box color="gray.600" fontWeight="Bold" fontSize="xl" px="60px">
        Reservation Details
      </Box>
      <Box
        borderBottom="2px"
        borderColor="gray.200"
        mx="40px"
        mt="10px"
        mb="15px"
      ></Box>
      {displayReservation.length !== 0 ? (
        <>
          <Box
            fontWeight="bold"
            textAlign={"left"}
            fontSize="lg"
            color="gray.600"
            px="40px"
          >
            Date
          </Box>
          <Box
            textAlign={"left"}
            mb="15px"
            fontWeight="semibold"
            color="gray.600"
            px="40px"
          >
            {displayReservation.date} • {displayReservation.time}:00
          </Box>
          <Box
            fontWeight="bold"
            textAlign={"left"}
            fontSize="lg"
            color="gray.600"
            px="40px"
          >
            Location
          </Box>
          <Box
            textAlign={"left"}
            mb="15px"
            fontWeight="semibold"
            color="gray.600"
            px="40px"
          >
            {displayReservation.recCenterName} •{" "}
            {displayReservation.resourceName}
          </Box>
        </>
      ) : (
        <Box fontWeight="semibold" color="gray.600">
          Choose timeslot to view reservation details
        </Box>
      )}
    </Box>
  );
}

export default ReservationForm;
