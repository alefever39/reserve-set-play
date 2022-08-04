import SpaceContainer from "../reusables/SpaceContainer";
import { Route, Switch, useHistory } from "react-router-dom";
import Reservations from "./Reservations";
import React, { useState, useEffect } from "react";
import { buildYearMonthDay } from "../helperFunctions.js";

function PlayerContainer({
  user,
  recCenters,
  loginModalOpen,
  setLoginModalOpen,
  displayDate,
  setDisplayDate,
  displayRecCenter,
  setDisplayRecCenter,
  displayResources,
  reservations,
}) {
  const [displayReservation, setDisplayReservation] = useState("");
  const [editReservationId, setEditReservationId] = useState(null);
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
      datetime_start: `${buildYearMonthDay(displayReservation.date)}T${
        displayReservation.time
      }:00:00.000Z`,
      datetime_end: `${buildYearMonthDay(displayReservation.date)}T${
        parseInt(displayReservation.time) + 1
      }:00:00.000Z`,
      reservation_type_id: 1,
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
      history.push("/home/my_reservations");
    });
  }

  function handleEdit(edittedReservation) {
    console.log("player container", edittedReservation.recCenter);
    setDisplayReservation(edittedReservation);
    setDisplayDate(edittedReservation.date);
    setDisplayRecCenter(edittedReservation.recCenter);
    setEditReservationId(edittedReservation.id);
    history.push("/home/edit_reservation");
  }

  function handleUpdate() {
    console.log(displayReservation);
    const updatedReservation = {
      reservation_type_id: displayReservation.bookingTypeId,
      resource_id: displayReservation.resourceId,
      user_id: displayReservation.userId,
      datetime_start: displayReservation.datetime_start,
      datetime_end: displayReservation.datetime_end,
    };
    fetch(`http://127.0.0.1:3000/reservations/${editReservationId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(updatedReservation),
    }).then(history.push("/home/my_reservations"));
  }

  return (
    <div>
      <Switch>
        <Route path="/home/my_reservations">
          <Reservations
            user={user}
            handleEdit={handleEdit}
            reservations={reservations}
          />
        </Route>
        <Route path="/home">
          <SpaceContainer
            recCenters={recCenters}
            displayDate={displayDate}
            setDisplayDate={setDisplayDate}
            displayReservation={displayReservation}
            handleCalendarSelection={handleCalendarSelection}
            handleNewReservation={handleNewReservation}
            displayRecCenter={displayRecCenter}
            displayResources={displayResources}
            setDisplayRecCenter={setDisplayRecCenter}
            admin={false}
            handleUpdate={handleUpdate}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default PlayerContainer;
