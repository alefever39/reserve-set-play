import Calendar from "./Calendar";
import DateCarousel from "./DateCarousel";
import DetailsContainer from "./DetailsContainer";
import RecCenterCarousel from "./RecCenterCarousel";
import React, { useState, useEffect } from "react";
import { CircularProgress } from "@chakra-ui/react";

function SpaceContainer({
  recCenters,
  displayReservation,
  handleCalendarSelection,
  handleNewReservation,
}) {
  let today = new Date();
  const day = String(today.getDate() + 1).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  today = year + "-" + month + "-" + day;
  console.log(today);

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

  return (
    <div>
      <RecCenterCarousel recCenters={recCenters} />
      <DateCarousel />
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
