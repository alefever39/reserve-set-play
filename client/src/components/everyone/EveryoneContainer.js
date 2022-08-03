import Calendar from "../reusables/Calendar";
import DateCarousel from "../reusables/DateCarousel";
import RecCenterCarousel from "../reusables/RecCenterCarousel";
import LoginModal from "./LoginModal";
import { Flex, Box } from "@chakra-ui/react";

function EveryoneContainer({
  recCenters,
  loginModalOpen,
  setLoginModalOpen,
  setUser,
}) {
  return (
    <div>
      <RecCenterCarousel recCenters={recCenters} />
      <DateCarousel />
      <Calendar />
      {loginModalOpen ? (
        <LoginModal setLoginModalOpen={setLoginModalOpen} setUser={setUser} />
      ) : null}
      <h3> Reserve </h3>
    </div>
  );
}

export default EveryoneContainer;
