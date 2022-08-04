import SpaceContainer from "../reusables/SpaceContainer";
import { Route, Switch, useHistory } from "react-router-dom";
import Reservations from "./Reservations";
import React, { useState } from "react";

function PlayerContainer({
  user,
  recCenters,
  loginModalOpen,
  setLoginModalOpen,
  displayDate,
  setDisplayDate,
}) {
  const [displayReservation, setDisplayReservation] = useState("");
  const history = useHistory();

  if (user.user_type) {
    if (user.user_type.user_type !== "player") {
      history.push("/");
    }
  } else {
    history.push("/");
  }

  function handleCalendarSelection(currentCalendarSelection) {
    setDisplayReservation(currentCalendarSelection);
  }

  function handleNewReservation() {
    const newReservation = {
      datetime_start: `${displayReservation.date}T${displayReservation.time}:00:00.000Z`,
      datetime_end: `${displayReservation.date}T${
        parseInt(displayReservation.time) + 1
      }:00:00.000Z`,
      reservation_type_id: 1,
      resource_id: displayReservation.resourceId,
      user_id: user.id,
    };
    console.log(newReservation);
    fetch(`http://127.0.0.1:3000/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(newReservation),
    }).then(() => {
      setDisplayReservation("");
      history.push("/home/my_reservations");
    });
  }
  return (
    <div>
      <Switch>
        <Route path="/home/my_reservations">
          <Reservations user={user}/>
        </Route>
        <Route path="/home">
          <SpaceContainer
            recCenters={recCenters}
            displayDate={displayDate}
            setDisplayDate={setDisplayDate}
            displayReservation={displayReservation}
            handleCalendarSelection={handleCalendarSelection}
            handleNewReservation={handleNewReservation}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default PlayerContainer;
