import Calendar from "../reusables/Calendar";
import DateCarousel from "../reusables/DateCarousel";
import RecCenterCarousel from "../reusables/RecCenterCarousel";
import LoginModal from "./LoginModal";
import { CircularProgress, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function EveryoneContainer({
  recCenters,
  loginModalOpen,
  setLoginModalOpen,
  setUser,
  displayDate,
  setDisplayDate,
  setDisplayReservation,
  displayRecCenter,
  setDisplayRecCenter,
  handleNewReservation,
  displayResources,
}) {
  const [openSignup, setOpenSignup] = useState(false);
  // const [displayResources, setDisplayResources] = useState([]);

  // useEffect(() => {
  //   setDisplayRecCenter(recCenters[0]);
  // }, [recCenters]);

  // useEffect(() => {
  //   if (displayRecCenter) {
  //     fetch(
  //       `http://127.0.0.1:3000/admin/rec_centers/${displayRecCenter.id}/resources`,
  //       {
  //         method: "GET",
  //         credentials: "include",
  //       }
  //     )
  //       .then((r) => r.json())
  //       .then((resourceData) => setDisplayResources(resourceData));
  //   }

  //   return function cleanup() {
  //     return null;
  //   };
  // }, [displayRecCenter]);

  function handleCalendarSelection(currentCalendarSelection) {
    setDisplayReservation(currentCalendarSelection);
  }

  function handleSignupClick() {
    setOpenSignup(true);
    setLoginModalOpen(true);
  }

  return (
    <div>
      <RecCenterCarousel
        recCenters={recCenters}
        setDisplayRecCenter={setDisplayRecCenter}
        admin={false}
        displayRecCenter={displayRecCenter}
      />
      <br />
      <DateCarousel displayDate={displayDate} setDisplayDate={setDisplayDate} />
      {displayRecCenter && displayResources.length !== 0 ? (
        <Calendar
          displayDate={displayDate}
          setDisplayDate={setDisplayDate}
          displayRecCenter={displayRecCenter}
          displayResources={displayResources}
          handleCalendarSelection={handleCalendarSelection}
        />
      ) : (
        <CircularProgress isIndeterminate color="green.300" />
      )}
      {loginModalOpen ? (
        <LoginModal
          setLoginModalOpen={setLoginModalOpen}
          setUser={setUser}
          openSignup={openSignup}
          setOpenSignup={setOpenSignup}
        />
      ) : null}
      <br />
      <h3> Want to reserve a space? </h3>
      <Button colorScheme="teal" onClick={handleSignupClick}>
        Sign up!
      </Button>
    </div>
  );
}

export default EveryoneContainer;
