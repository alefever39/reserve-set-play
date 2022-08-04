import SpaceContainer from "../reusables/SpaceContainer";
import { Route, Switch, useHistory } from "react-router-dom";
import Reservations from "./Reservations";
import React, { useState, useEffect } from "react";

function PlayerContainer({
  user,
  recCenters,
  loginModalOpen,
  setLoginModalOpen,
}) {
  let today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  today = year + "-" + month + "-" + day;

  const [displayReservation, setDisplayReservation] = useState("");
  const history = useHistory();
  const [displayDate, setDisplayDate] = useState(today);
  const [displayRecCenter, setDisplayRecCenter] = useState(recCenters[0]);
  const [displayResources, setDisplayResources] = useState([]);

  useEffect(() => {
    setDisplayRecCenter(recCenters[0]);
  }, [recCenters]);

  useEffect(() => {
    if (displayRecCenter) {
      fetch(
        `http://127.0.0.1:3000/admin/rec_centers/${displayRecCenter.id}/resources`,
        {
          method: "GET",
          credentials: "include",
        }
      )
        .then((r) => r.json())
        .then((resourceData) => setDisplayResources(resourceData));
    }
  }, [displayRecCenter]);

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
    console.log(edittedReservation);
    setDisplayReservation(edittedReservation);
    setDisplayDate(edittedReservation.date);
    setDisplayRecCenter(edittedReservation.recCenter);
    history.push("/home/edit_reservation");
  }

  // function handleSave() {
  //   const reservation = {
  //     reservation_type_id: edittedReservation.bookingTypeId,
  //     resource_id: edittedReservation.resourceId,
  //     user_id: edittedReservation.userId,
  //     datetime_start: edittedReservation.datetime_start,
  //     datetime_end: edittedReservation.datetime_end,
  //   };
  //   fetch(`http://127.0.0.1:3000/reservations/${edittedReservation.id}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "include",
  //     body: JSON.stringify(reservation),
  //   }).then(() => {
  // }

  return (
    <div>
      <Switch>
        <Route path="/home/my_reservations">
          <Reservations user={user} handleEdit={handleEdit} />
        </Route>
        <Route path="/home">
          <SpaceContainer
            recCenters={recCenters}
            displayReservation={displayReservation}
            handleCalendarSelection={handleCalendarSelection}
            handleNewReservation={handleNewReservation}
            displayDate={displayDate}
            displayRecCenter={displayRecCenter}
            displayResources={displayResources}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default PlayerContainer;
