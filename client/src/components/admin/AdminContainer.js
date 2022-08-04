import { Route, Switch, useHistory } from "react-router-dom";
import RecCenters from "./RecCenters";
import Resources from "./Resources";
import SpaceContainer from "../reusables/SpaceContainer";
import LoginModal from "../everyone/LoginModal";

function AdminContainer({
  recCenters,
  loginModalOpen,
  setLoginModalOpen,
  user,
  displayDate,
  setDisplayDate,
  displayReservation,
  setDisplayReservation,
  displayRecCenter,
  setDisplayRecCenter,
  handleNewReservation,
}) {
  const history = useHistory();

  console.log("Admin Container", displayReservation);

  if (user.user_type) {
    if (user.user_type.user_type !== "admin") {
      history.push("/");
    }
  } else {
    history.push("/");
  }

  function handleCalendarSelection(currentCalendarSelection) {
    setDisplayReservation(currentCalendarSelection);
  }

  return (
    <div>
      <Switch>
        {loginModalOpen ? (
          <LoginModal setLoginModalOpen={setLoginModalOpen} />
        ) : null}
        <Route exact path="/admin/rec_centers">
          <RecCenters recCenters={recCenters} />
        </Route>
        <Route path="/admin/rec_centers/:rec_center_id/resources">
          <Resources />
        </Route>
        <Route path="/admin">
          <SpaceContainer
            displayReservation={displayReservation}
            recCenters={recCenters}
            displayDate={displayDate}
            setDisplayDate={setDisplayDate}
            handleCalendarSelection={handleCalendarSelection}
            displayRecCenter={displayRecCenter}
            setDisplayRecCenter={setDisplayRecCenter}
            handleNewReservation={handleNewReservation}
            admin={true}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default AdminContainer;
