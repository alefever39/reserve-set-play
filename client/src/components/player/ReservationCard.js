import { Flex, Box, Button } from "@chakra-ui/react";

function ReservationCard({
  reservation,
  handleEdit,
  allReservations,
  setReservations,
}) {
  function handleClick() {
    const reservationToEdit = {
      id: reservation.id,
      date: new Date(reservation.datetime_start),
      time: parseInt(reservation.datetime_start.substring(11, 13)),
      datetime_start: reservation.datetime_start,
      datetime_end: reservation.datetime_end,
      resourceId: reservation.resource.id,
      resourceName: reservation.resource.name,
      bookingTypeId: 1,
      recCenterName: reservation.rec_center.name,
      recCenter: reservation.rec_center,
    };

    handleEdit(reservationToEdit);
  }

  //Handles delete directly from the reservation card
  function handleDeleteClick() {
    fetch(`/reservations/${reservation.id}`, {
      method: "DELETE",
      credentials: "include",
    }).then(
      setReservations(
        allReservations.filter(
          (remainingReservation) => remainingReservation.id !== reservation.id
        )
      )
    );
  }

  return (
    <Box
      border="2px"
      borderColor="gray.200"
      borderRadius="md"
      boxShadow="md"
      py="15px"
      align="center"
      w="330px"
    >
      <Box color="gray.600" fontWeight="Bold" fontSize="md" px="60px">
        {reservation.reservation_time.substring(0, 11)} {"  "}•{"  "}{" "}
        {reservation.reservation_time.substring(
          13,
          reservation.reservation_time.length
        )}
      </Box>
      <Box
        borderBottom="2px"
        borderColor="gray.200"
        mx="20px"
        mt="10px"
        mb="10px"
      ></Box>
      <>
        <Box
          fontWeight="bold"
          textAlign={"left"}
          fontSize="md"
          color="gray.600"
          px="20px"
        >
          Rec Center
        </Box>
        <Box
          textAlign={"left"}
          mb="10px"
          fontWeight="semibold"
          color="gray.600"
          px="20px"
          fontSize="sm"
        >
          {reservation.rec_center.name} - {reservation.resource.name}
        </Box>

        <Box
          fontWeight="bold"
          textAlign={"left"}
          fontSize="md"
          color="gray.600"
          px="20px"
        >
          Address
        </Box>
        <Box
          textAlign={"left"}
          mb="10px"
          fontWeight="semibold"
          color="gray.600"
          px="20px"
          fontSize="sm"
        >
          {reservation.rec_center.address}
        </Box>
        <Button colorScheme="teal" size="sm" onClick={handleClick} m="5px">
          Change
        </Button>
        <Button
          colorScheme="teal"
          variant="outline"
          size="sm"
          onClick={handleDeleteClick}
          m="5px"
        >
          Cancel
        </Button>
      </>
    </Box>
    // <Box maxW="sm" borderWidth="1px" borderRadius="lg" borderShadow="md">
    //   <Box fontWeight="semibold" m="10px">
    //     {reservation.resource.name}
    //   </Box>
    //   <Box fontSize="s">Reservation time: {reservation.reservation_time}</Box>
    //   <Box
    //     color="gray.500"
    //     letterSpacing="wide"
    //     fontSize="xs"
    //     m="2"
    //     textTransform="uppercase"
    //   >
    //     Address: {reservation.rec_center.name}, {reservation.rec_center.address}
    //   </Box>
    //   <Box>
    //     <Button colorScheme="teal" size="sm" onClick={handleClick} m="5px">
    //       Change
    //     </Button>
    //     <Button
    //       colorScheme="teal"
    //       variant="outline"
    //       size="sm"
    //       onClick={handleDeleteClick}
    //       m="5px"
    //     >
    //       Cancel
    //     </Button>
    //   </Box>
    // </Box>
  );
}

export default ReservationCard;
