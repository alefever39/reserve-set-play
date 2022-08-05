import ReservationCard from "./ReservationCard";
import { Flex, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getPreviousDay } from "../helperFunctions.js";

function Reservations({ user, handleEdit, reservations, setReservations }) {

  const yesterday = getPreviousDay();

  const userReservationCards = reservations
    .map((reservation) => {
      const reservationDate = new Date(reservation.datetime_start);
      if (
        String(reservationDate.getTime()).slice(0, 8) >
        String(yesterday.getTime())
      )
        return (
          <ReservationCard
            key={reservation.id}
            reservation={reservation}
            handleEdit={handleEdit}
            removeReservation={removeReservation}
          />
        );
    })
    .filter((n) => n);

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
