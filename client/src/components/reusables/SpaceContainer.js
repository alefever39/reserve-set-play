import Calendar from "./Calendar";
import DateCarousel from "./DateCarousel";
import DetailsContainer from "./DetailsContainer";
import RecCenterCarousel from "./RecCenterCarousel";
import React, { useState, useEffect } from "react";
import { CircularProgress } from "@chakra-ui/react";

function SpaceContainer({
  displayDate,
  setDisplayDate,
  recCenters,
  displayReservation,
  handleCalendarSelection,
  handleNewReservation,
}) {
  const [displayRecCenter, setDisplayRecCenter] = useState(recCenters[0]);
  const [displayResources, setDisplayResources] = useState([]);

  console.log("Space Container", displayReservation);

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

  return (
    <div>
      <RecCenterCarousel recCenters={recCenters} />
      <br />
      <DateCarousel displayDate={displayDate} setDisplayDate={setDisplayDate} />
      {displayRecCenter && displayResources.length !== 0 ? (
        <Calendar
          displayDate={displayDate}
          displayRecCenter={displayRecCenter}
          displayResources={displayResources}
          handleCalendarSelection={handleCalendarSelection}
        />
      ) : (
        <CircularProgress isIndeterminate color="green.300" />
      )}
      <DetailsContainer
        displayReservation={displayReservation}
        handleNewReservation={handleNewReservation}
      />
    </div>
  );
}

export default SpaceContainer;
