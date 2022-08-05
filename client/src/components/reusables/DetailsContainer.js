import { HStack } from "@chakra-ui/react";
import ReservationEventContainer from "./ReservationEventContainer";
import ReservationForm from "./ReservationForm";

function DetailsContainer({
  displayReservation,
  handleNewReservation,
  handleAdminReservation,
  handleUpdate,
  setDisplayReservation,
}) {
  return (
    <HStack
      display="flex"
      justifyContent="center"
      alignItems="center"
      spacing="80px"
      my="20px"
    >
      <ReservationForm displayReservation={displayReservation} />

      <ReservationEventContainer
        handleNewReservation={handleNewReservation}
        handleUpdate={handleUpdate}
        handleAdminReservation={handleAdminReservation}
        setDisplayReservation={setDisplayReservation}
      />
    </HStack>
  );
}

export default DetailsContainer;
