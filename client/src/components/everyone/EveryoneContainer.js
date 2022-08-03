import Calendar from "../reusables/Calendar";
import DateCarousel from "../reusables/DateCarousel";
import RecCenterCarousel from "../reusables/RecCenterCarousel";
import LoginModal from "./LoginModal";

function EveryoneContainer({
  recCenters,
  loginModalOpen,
  setLoginModalOpen,
  setUser,
}) {
  console.log("recCenters", recCenters);
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
