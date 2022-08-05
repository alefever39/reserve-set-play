import { Flex, Box, Heading, Button } from "@chakra-ui/react";

function ReservationCard({ reservation, handleEdit, removeReservation }) {
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

  function handleDelete() {
    fetch(`/reservations/${reservation.id}`, {
      method: "DELETE",
      credentials: "include",
    }).then(removeReservation(reservation.id));
  }

  return (
    <Flex
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      justifyContent="space-around"
    >
      <Box fontWeight="semibold" m="10px">
        {reservation.resource.name}
        <Box fontSize="s">Reservation time: {reservation.reservation_time}</Box>
        <Box
          color="gray.500"
          letterSpacing="wide"
          fontSize="xs"
          m="2"
          textTransform="uppercase"
        >
          Address: {reservation.rec_center.name},{" "}
          {reservation.rec_center.address}
        </Box>
        <Box>
          <Button
            colorScheme="teal"
            variant="outline"
            size="sm"
            onClick={handleDelete}
            m="5px"
          >
            Cancel
          </Button>
          <Button colorScheme="teal" size="sm" onClick={handleClick} m="5px">
            Change
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}

export default ReservationCard;
