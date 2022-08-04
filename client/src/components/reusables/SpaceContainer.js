import Calendar from "./Calendar";
import DateCarousel from "./DateCarousel";
import DetailsContainer from "./DetailsContainer";
import RecCenterCarousel from "./RecCenterCarousel";
import React, { useState, useEffect } from "react";
import { CircularProgress } from "@chakra-ui/react";

function SpaceContainer({
  recCenters,
  displayReservation,
  displayDate,
  displayRecCenter,
  displayResources,
  handleCalendarSelection,
  handleNewReservation,
}) {
  return (
    <div>
      <RecCenterCarousel recCenters={recCenters} />
      <br />
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
