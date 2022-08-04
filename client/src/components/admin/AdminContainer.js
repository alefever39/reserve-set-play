import { Route, Switch, useHistory } from "react-router-dom";
import RecCenters from "./RecCenters";
import Resources from "./Resources";
import SpaceContainer from "../reusables/SpaceContainer";
import LoginModal from "../everyone/LoginModal";
import { buildYearMonthDay } from "../helperFunctions.js";

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
  displayResources,
}) {
  const history = useHistory();

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

  function handleAdminReservation(){
    console.log(displayReservation)
    const newReservation = {
      datetime_start: `${buildYearMonthDay(displayReservation.date)}T${
        displayReservation.time
      }:00:00.000Z`,
      datetime_end: `${buildYearMonthDay(displayReservation.date)}T${
        parseInt(displayReservation.time) + 1
      }:00:00.000Z`,
      reservation_type_id: 2,
      resource_id: displayReservation.resourceId,
      user_id: user.id,
    };

    fetch(`http://127.0.0.1:3000/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(newReservation),
    }).then(() => {
      setDisplayReservation("");
      window.scrollTo({ top: 0, behavior: 'smooth'});
    });
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
            displayResources={displayResources}
            admin={true}
            handleAdminReservation={handleAdminReservation}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default AdminContainer;
