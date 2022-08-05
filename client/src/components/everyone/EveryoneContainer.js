import Calendar from "../reusables/Calendar";
import DateCarousel from "../reusables/DateCarousel";
import RecCenterCarousel from "../reusables/RecCenterCarousel";
import LoginModal from "./LoginModal";
import { CircularProgress, Box, Heading } from "@chakra-ui/react";
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
      <Heading as="h4" fontSize="lg" mb="7px">
        {" "}
        Want to reserve a space?{" "}
      </Heading>
      <Box
        as="button"
        borderRadius="lg"
        bg="teal.300"
        onClick={handleSignupClick}
        mb="20px"
        fontSize="2xl"
        fontWeight="semibold"
        py={2}
        px={40}
      >
        Sign up!
      </Box>
    </div>
  );
}

export default EveryoneContainer;
