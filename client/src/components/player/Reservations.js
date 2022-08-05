import ReservationCard from "./ReservationCard";
import { Flex, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function Reservations({ user, handleEdit, reservations, setReservations }) {
  const userReservationCards = reservations.map((reservation) => (
    <ReservationCard
      key={reservation.id}
      reservation={reservation}
      handleEdit={handleEdit}
      removeReservation={removeReservation}
    />
  ));

  function removeReservation(deletedReservationId) {
    const updatedReservationsList = reservations.filter(
      (reservation) => reservation.id !== deletedReservationId
    );
    setReservations(updatedReservationsList);
  }

  return (
    <Box>
      <Flex
        h="100px"
        justifyContent="space-between"
        alignItems="center"
        mx="15px"
      >
        <Heading as="h1">Upcoming Reservations</Heading>
      </Flex>
      <SimpleGrid minChildWidth="320px" spacing="30px" mx="15px">
        {userReservationCards}
      </SimpleGrid>
    </Box>
  );
}

export default Reservations;
