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
  displayResources,
  handleCalendarSelection,
  handleNewReservation,
  displayRecCenter,
  setDisplayRecCenter,
  admin,
  handleUpdate,
  handleAdminReservation
}) {
  return (
    <div>
      <RecCenterCarousel
        recCenters={recCenters}
        setDisplayRecCenter={setDisplayRecCenter}
        admin={admin}
      />
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
        handleUpdate={handleUpdate}
        handleAdminReservation={handleAdminReservation}
      />
    </div>
  );
}

export default SpaceContainer;
