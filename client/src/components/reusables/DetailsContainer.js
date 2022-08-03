import { HStack } from "@chakra-ui/react";
import ReservationEventContainer from "./ReservationEventContainer";
import ReservationForm from "./ReservationForm";

function DetailsContainer({ displayReservation }) {
  return (
    <HStack
      display="flex"
      justifyContent="center"
      alignItems="center"
      spacing="150px"
    >
      <ReservationForm displayReservation={displayReservation} />
      <ReservationEventContainer />
    </HStack>
  );
}

export default DetailsContainer;
