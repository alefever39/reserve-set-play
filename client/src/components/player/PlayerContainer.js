import SpaceContainer from "../reusables/SpaceContainer";
import { Route, Switch, useHistory } from "react-router-dom";
import Reservations from "./Reservations";
import React, { useState, useEffect } from "react";
import { buildYearMonthDay } from "../helperFunctions.js";

function PlayerContainer({
  user,
  recCenters,
  displayDate,
  setDisplayDate,
  displayRecCenter,
  setDisplayRecCenter,
  displayResources,
  reservations,
  addToReservationState,
  updateReservationState,
  setReservations,
  displayReservation,
  setDisplayReservation,
}) {
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

    fetch(`/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(newReservation),
    })
      .then((r) => r.json())
      .then((reservation) => {
        setDisplayReservation("");
        addToReservationState(reservation);
        history.push("/home/my_reservations");
      });
  }

  function handleEdit(edittedReservation) {
    setDisplayReservation(edittedReservation);
    setDisplayDate(new Date(edittedReservation.date));
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
    fetch(`/reservations/${editReservationId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(updatedReservation),
    })
      .then((r) => r.json())
      .then((updatedReservation) => {
        setDisplayReservation("");
        updateReservationState(updatedReservation);
        history.push("/home/my_reservations");
      });
  }

  function handleDelete(){
    console.log(editReservationId)
     fetch(`http://localhost:3000/reservations/${editReservationId}`, {
      method: "DELETE",
      credentials: "include",
    }).then(removeReservation(editReservationId));
  }

  function removeReservation(deletedReservationId) {
      const updatedReservationsList = reservations.filter(
        (reservation) => reservation.id !== deletedReservationId
      );
      setReservations(updatedReservationsList);
      setDisplayReservation("");
      history.push("/home/my_reservations");
  }

  return (
    <div>
      <Switch>
        <Route path="/home/my_reservations">
          <Reservations
            user={user}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            reservations={reservations}
            setReservations={setReservations}
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
            handleDelete={handleDelete}
            reservations={reservations}
            setDisplayReservation={setDisplayReservation}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default PlayerContainer;
